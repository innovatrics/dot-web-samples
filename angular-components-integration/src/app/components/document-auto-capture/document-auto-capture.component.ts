import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OnPhotoTakenEventValue, Step } from 'src/app/types';
import {
  dispatchControlEvent,
  DocumentCustomEvent,
  ControlEventInstruction,
} from '@innovatrics/dot-document-auto-capture/events';
import { DocumentComponentData } from '@innovatrics/dot-document-auto-capture';

@Component({
  selector: 'app-document-auto-capture',
  templateUrl: './document-auto-capture.component.html',
})
export class DocumentAutoCaptureComponent implements OnInit {
  @Output() onPhotoTaken = new EventEmitter<OnPhotoTakenEventValue<DocumentComponentData>>();
  @Output() onError = new EventEmitter<Error>();
  @Output() onBack = new EventEmitter<Step>();

  isButtonDisabled = true;

  constructor() { }

  ngOnInit(): void { }

  onBackClick() {
    this.onBack.emit(Step.SELECT_COMPONENT);
  }

  handleContinue() {
    dispatchControlEvent(
      DocumentCustomEvent.CONTROL,
      ControlEventInstruction.CONTINUE_DETECTION
    );
    this.isButtonDisabled = true;
  }

  handlePhotoTaken({ imageData, content }: OnPhotoTakenEventValue<DocumentComponentData>) {
    this.onPhotoTaken.emit({ imageData, content });
    this.isButtonDisabled = false;
  }

  handleError(error: Error) {
    this.onError.emit(error);
  }
}

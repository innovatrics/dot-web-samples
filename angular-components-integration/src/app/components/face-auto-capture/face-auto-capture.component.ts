import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OnPhotoTakenEventValue, Step } from 'src/app/types';
import {
  dispatchControlEvent,
  FaceCustomEvent,
  ControlEventInstruction,
} from '@innovatrics/dot-face-auto-capture/events';
import { FaceComponentData } from '@innovatrics/dot-face-auto-capture/';

@Component({
  selector: 'app-face-auto-capture',
  templateUrl: './face-auto-capture.component.html',
})
export class FaceAutoCaptureComponent implements OnInit {
  @Output() onPhotoTaken = new EventEmitter<OnPhotoTakenEventValue<FaceComponentData>>();
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
      FaceCustomEvent.CONTROL,
      ControlEventInstruction.CONTINUE_DETECTION
    );
    this.isButtonDisabled = true;
  }

  handlePhotoTaken({ image, data }: OnPhotoTakenEventValue<FaceComponentData>) {
    this.onPhotoTaken.emit({ image, data });
    this.isButtonDisabled = false;
  }

  handleError(error: Error) {
    this.onError.emit(error);
  }
}

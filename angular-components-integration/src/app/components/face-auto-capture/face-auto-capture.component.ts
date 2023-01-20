import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OnPhotoTakenEventValue, Step } from 'src/app/types';
import {
  dispatchControlEvent,
  FaceCustomEvent,
  ControlEventInstruction,
} from '@innovatrics/dot-face-auto-capture/events';

@Component({
  selector: 'app-face-auto-capture',
  templateUrl: './face-auto-capture.component.html',
})
export class FaceAutoCaptureComponent implements OnInit {
  @Output() onPhotoTaken = new EventEmitter<OnPhotoTakenEventValue>();
  @Output() onError = new EventEmitter<Error>();
  @Output() onBack = new EventEmitter<Step>();

  isButtonDisabled = true;

  constructor() {}

  ngOnInit(): void {}

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

  handlePhotoTaken({ image, data }: OnPhotoTakenEventValue) {
    this.onPhotoTaken.emit({ image, data });
    this.isButtonDisabled = false;
  }

  handleError(error: Error) {
    this.onError.emit(error);
  }
}

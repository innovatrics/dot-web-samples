import { Component, Output, EventEmitter } from '@angular/core';
import { OnPhotoTakenEventValue, Step } from '../../types';
import {
  dispatchControlEvent,
  FaceCustomEvent,
  ControlEventInstruction,
} from '@innovatrics/dot-face-auto-capture/events';
import { DetectedFace } from '@innovatrics/dot-face-auto-capture';
import { FaceCameraComponent } from './face-camera.component';
import { FaceUiComponent } from './face-ui.component';

@Component({
  selector: 'app-face-auto-capture',
  standalone: true,
  imports: [FaceCameraComponent, FaceUiComponent],
  template: `
    <div>
      <h2>Face auto capture</h2>
      <button (click)="onBackClick()" class="button">Go back</button>
      <button
        (click)="handleContinue()"
        class="button"
        [disabled]="isButtonDisabled"
      >
        Continue detection
      </button>
      <div class="container">
        <app-face-camera
          (photoTaken)="handlePhotoTaken($event)"
          (captureError)="handleError($event)"
        ></app-face-camera>
        <app-face-ui></app-face-ui>
      </div>
    </div>
  `,
})
export class FaceAutoCaptureComponent {
  @Output() photoTaken = new EventEmitter<
    OnPhotoTakenEventValue<DetectedFace>
  >();
  @Output() captureError = new EventEmitter<Error>();
  @Output() back = new EventEmitter<Step>();

  isButtonDisabled = true;

  onBackClick() {
    this.back.emit(Step.SELECT_COMPONENT);
  }

  handleContinue() {
    dispatchControlEvent(
      FaceCustomEvent.CONTROL,
      ControlEventInstruction.CONTINUE_DETECTION,
    );
    this.isButtonDisabled = true;
  }

  handlePhotoTaken({
    imageData,
    content,
  }: OnPhotoTakenEventValue<DetectedFace>) {
    this.photoTaken.emit({ imageData, content });
    this.isButtonDisabled = false;
  }

  handleError(error: Error) {
    this.captureError.emit(error);
  }
}

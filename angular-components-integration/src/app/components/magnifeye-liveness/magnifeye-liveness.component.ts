import { Component, Output, EventEmitter } from '@angular/core';
import { OnPhotoTakenEventValue, Step } from '../../types';
import { MagnifEyeLivenessCameraComponent } from './magnifeye-liveness-camera.component';
import { MagnifEyeLivenessUiComponent } from './magnifeye-liveness-ui.component';
import {
  dispatchControlEvent,
  MagnifEyeCustomEvent,
  ControlEventInstruction,
} from '@innovatrics/dot-magnifeye-liveness/events';
import { DetectedFace } from '@innovatrics/dot-magnifeye-liveness/ui-common/src/types';
@Component({
  selector: 'app-magnifeye-liveness',
  standalone: true,
  imports: [MagnifEyeLivenessCameraComponent, MagnifEyeLivenessUiComponent],
  template: `
    <div>
      <h2>MagnifEye Liveness</h2>
      <button (click)="onBackClick()" class="button">Go back</button>
      <button
        (click)="handleContinue()"
        class="button"
        [disabled]="isButtonDisabled"
      >
        Continue detection
      </button>
      <div class="container">
        <app-magnifeye-liveness-camera
          (photoTaken)="handlePhotoTaken($event)"
          (captureError)="handleError($event)"
        ></app-magnifeye-liveness-camera>
        <app-magnifeye-liveness-ui></app-magnifeye-liveness-ui>
      </div>
    </div>
  `,
})
export class MagnifEyeLivenessComponent {
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
      MagnifEyeCustomEvent.CONTROL,
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

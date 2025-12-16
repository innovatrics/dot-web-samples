import { Component, Output, EventEmitter } from '@angular/core';
import { OnPhotoTakenEventValue, Step } from '../../types';
import '@innovatrics/dot-smile-liveness';
import { SmileLivenessCameraComponent } from './smile-liveness-camera.component';
import { SmileLivenessUiComponent } from './smile-liveness-ui.component';

import {
  dispatchControlEvent,
  SmileCustomEvent,
  ControlEventInstruction,
} from '@innovatrics/dot-smile-liveness/events';
@Component({
  selector: 'app-smile-liveness',
  standalone: true,
  imports: [SmileLivenessCameraComponent, SmileLivenessUiComponent],
  template: `
    <div>
      <h2>Smile Liveness</h2>
      <button (click)="onBackClick()" class="button">Go back</button>
      <button
        (click)="handleContinue()"
        class="button"
        [disabled]="isButtonDisabled"
      >
        Continue detection
      </button>
      <div class="container">
        <app-smile-liveness-camera
          (photoTaken)="handlePhotoTaken($event)"
          (captureError)="handleError($event)"
        ></app-smile-liveness-camera>
        <app-smile-liveness-ui></app-smile-liveness-ui>
      </div>
    </div>
  `,
})
export class SmileLivenessComponent {
  @Output() photoTaken = new EventEmitter<OnPhotoTakenEventValue>();
  @Output() captureError = new EventEmitter<Error>();
  @Output() back = new EventEmitter<Step>();

  isButtonDisabled = true;

  onBackClick() {
    this.back.emit(Step.SELECT_COMPONENT);
  }

  handleContinue() {
    dispatchControlEvent(
      SmileCustomEvent.CONTROL,
      ControlEventInstruction.CONTINUE_DETECTION,
    );
    this.isButtonDisabled = true;
  }

  handlePhotoTaken(event: OnPhotoTakenEventValue) {
    this.photoTaken.emit(event);
    this.isButtonDisabled = false;
  }

  handleError(error: Error) {
    this.captureError.emit(error);
  }
}

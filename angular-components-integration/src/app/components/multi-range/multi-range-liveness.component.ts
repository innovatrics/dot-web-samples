import { Component, EventEmitter, Output } from '@angular/core';
import {
  ControlEventInstruction,
  dispatchControlEvent,
  MultiRangeCustomEvent,
} from '@innovatrics/dot-multi-range-liveness/events';

import { OnPhotoTakenEventValue, Step } from '../../types';

import { MultiRangeLivenessCameraComponent } from './multi-range-liveness-camera.component';
import { MultiRangeLivenessUiComponent } from './multi-range-liveness-ui.component';
import { DetectedFace } from '@innovatrics/dot-multi-range-liveness/ui-common/src/types/face';

@Component({
  selector: 'app-multi-range-liveness',
  standalone: true,
  imports: [MultiRangeLivenessCameraComponent, MultiRangeLivenessUiComponent],
  template: `
    <div>
      <h2>Multi Range Liveness</h2>
      <button (click)="onBackClick()" class="button">Go back</button>
      <button (click)="handleContinue()" class="button" [disabled]="isButtonDisabled">Continue detection</button>
      <div class="container">
        <app-multi-range-liveness-camera
          (photoTaken)="handlePhotoTaken($event)"
          (captureError)="handleError($event)"
        ></app-multi-range-liveness-camera>
        <app-multi-range-liveness-ui></app-multi-range-liveness-ui>
      </div>
    </div>
  `,
})
export class MultiRangeLivenessComponent {
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
    dispatchControlEvent(MultiRangeCustomEvent.CONTROL, ControlEventInstruction.CONTINUE_DETECTION);

    this.isButtonDisabled = true;
  }

  handlePhotoTaken({ content, imageData }: OnPhotoTakenEventValue<DetectedFace>) {
    this.photoTaken.emit({ imageData, content });
    this.isButtonDisabled = false;
  }

  handleError(error: Error) {
    this.captureError.emit(error);
  }
}

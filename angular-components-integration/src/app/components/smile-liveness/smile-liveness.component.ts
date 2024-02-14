import { Component, Output, EventEmitter } from '@angular/core';
import { OnPhotoTakenEventValue, Step } from '../../types';
import type { OnCompleteData } from '@innovatrics/dot-smile-liveness';
import '@innovatrics/dot-smile-liveness';
import { SmileLivenessCameraComponent } from './smile-liveness-camera.component';
import { SmileLivenessUiComponent } from './smile-liveness-ui.component';

@Component({
  selector: 'app-smile-liveness',
  standalone: true,
  imports: [SmileLivenessCameraComponent, SmileLivenessUiComponent],
  template: `
    <div>
      <h2>Smile Liveness</h2>
      <button (click)="onBackClick()" class="button">Go back</button>
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
  @Output() photoTaken = new EventEmitter<
    OnPhotoTakenEventValue<OnCompleteData['data']>
  >();
  @Output() captureError = new EventEmitter<Error>();
  @Output() back = new EventEmitter<Step>();

  onBackClick() {
    this.back.emit(Step.SELECT_COMPONENT);
  }

  handlePhotoTaken({
    imageData,
    content,
  }: OnPhotoTakenEventValue<OnCompleteData['data']>) {
    this.photoTaken.emit({ imageData, content });
  }

  handleError(error: Error) {
    this.captureError.emit(error);
  }
}

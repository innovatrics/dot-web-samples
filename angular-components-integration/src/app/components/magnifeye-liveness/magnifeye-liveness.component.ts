import { Component, Output, EventEmitter } from '@angular/core';
import { OnPhotoTakenEventValue, Step } from '../../types';
import type { OnCompleteData } from '@innovatrics/dot-magnifeye-liveness';
import { MagnifEyeLivenessCameraComponent } from './magnifeye-liveness-camera.component';
import { MagnifEyeLivenessUiComponent } from './magnifeye-liveness-ui.component';

@Component({
  selector: 'app-magnifeye-liveness',
  standalone: true,
  imports: [MagnifEyeLivenessCameraComponent, MagnifEyeLivenessUiComponent],
  template: `
    <div>
      <h2>MagnifEye Liveness</h2>
      <button (click)="onBackClick()" class="button">Go back</button>
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

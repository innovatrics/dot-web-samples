import { Component, Output, EventEmitter } from '@angular/core';
import { OnPhotoTakenEventValue, Step } from '../../types';
import {
  dispatchControlEvent,
  PalmCustomEvent,
  ControlEventInstruction,
} from '@innovatrics/dot-palm-capture/events';
import { PalmComponentData } from '@innovatrics/dot-palm-capture';
import { PalmCameraComponent } from './palm-camera.component';
import { PalmUiComponent } from './palm-ui.component';

@Component({
  selector: 'app-palm-auto-capture',
  standalone: true,
  imports: [PalmCameraComponent, PalmUiComponent],
  template: `
    <div>
      <h2>Palm auto capture</h2>
      <button (click)="handleBack()" class="button">Go back</button>
      <button
        (click)="handleContinue()"
        class="button"
        [disabled]="isButtonDisabled"
      >
        Continue detection
      </button>
      <div class="container">
        <app-palm-camera
          (photoTaken)="handlePhotoTaken($event)"
          (captureError)="handleError($event)"
        ></app-palm-camera>
        <app-palm-ui></app-palm-ui>
      </div>
    </div>
  `,
})
export class PalmCaptureComponent {
  @Output() photoTaken = new EventEmitter<
    OnPhotoTakenEventValue<PalmComponentData>
  >();
  @Output() captureError = new EventEmitter<Error>();
  @Output() back = new EventEmitter<Step>();

  isButtonDisabled = true;

  handleBack() {
    this.back.emit(Step.SELECT_COMPONENT);
  }

  handleContinue() {
    dispatchControlEvent(
      PalmCustomEvent.CONTROL,
      ControlEventInstruction.CONTINUE_DETECTION,
    );
    this.isButtonDisabled = true;
  }

  handlePhotoTaken({
    imageData,
    content,
  }: OnPhotoTakenEventValue<PalmComponentData>) {
    this.photoTaken.emit({ imageData, content });
    this.isButtonDisabled = false;
  }

  handleError(error: Error) {
    this.captureError.emit(error);
  }
}

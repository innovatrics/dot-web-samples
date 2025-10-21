import { Component, Output, EventEmitter } from '@angular/core';
import { OnPhotoTakenEventValue, Step } from '../../types';
import {
  dispatchControlEvent,
  DocumentCustomEvent,
  ControlEventInstruction,
} from '@innovatrics/dot-document-auto-capture/events';
import { DetectedDocument } from '@innovatrics/dot-document-auto-capture';
import { DocumentCameraComponent } from './document-camera.component';
import { DocumentUiComponent } from './document-ui.component';

@Component({
  selector: 'app-document-auto-capture',
  standalone: true,
  imports: [DocumentCameraComponent, DocumentUiComponent],
  template: `
    <div>
      <h2>Document auto capture</h2>
      <button (click)="handleBack()" class="button">Go back</button>
      <button
        (click)="handleContinue()"
        class="button"
        [disabled]="isButtonDisabled"
      >
        Continue detection
      </button>
      <div class="container">
        <app-document-camera
          (photoTaken)="handlePhotoTaken($event)"
          (captureError)="handleError($event)"
        ></app-document-camera>
        <app-document-ui></app-document-ui>
      </div>
    </div>
  `,
})
export class DocumentAutoCaptureComponent {
  @Output() photoTaken = new EventEmitter<
    OnPhotoTakenEventValue<DetectedDocument>
  >();
  @Output() captureError = new EventEmitter<Error>();
  @Output() back = new EventEmitter<Step>();

  isButtonDisabled = true;

  handleBack() {
    this.back.emit(Step.SELECT_COMPONENT);
  }

  handleContinue() {
    dispatchControlEvent(
      DocumentCustomEvent.CONTROL,
      ControlEventInstruction.CONTINUE_DETECTION,
    );
    this.isButtonDisabled = true;
  }

  handlePhotoTaken({
    imageData,
    content,
  }: OnPhotoTakenEventValue<DetectedDocument>) {
    this.photoTaken.emit({ imageData, content });
    this.isButtonDisabled = false;
  }

  handleError(error: Error) {
    this.captureError.emit(error);
  }
}

import {
  Component,
  OnInit,
  NgZone,
  EventEmitter,
  Output,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { OnPhotoTakenEventValue } from '../../types';
import '@innovatrics/dot-document-auto-capture';
import type {
  DetectedDocument,
  HTMLDocumentCaptureElement,
} from '@innovatrics/dot-document-auto-capture';

@Component({
  selector: 'app-document-camera',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <x-dot-document-auto-capture
      id="x-dot-document-auto-capture"
    ></x-dot-document-auto-capture>
  `,
})
export class DocumentCameraComponent implements OnInit {
  @Output() photoTaken = new EventEmitter<
    OnPhotoTakenEventValue<DetectedDocument>
  >();
  @Output() captureError = new EventEmitter<Error>();

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.initDocumentAutoCapture();
  }

  initDocumentAutoCapture() {
    const documentElement = document.getElementById(
      'x-dot-document-auto-capture',
    ) as HTMLDocumentCaptureElement | null;

    if (documentElement) {
      documentElement.cameraOptions = {
        cameraFacing: 'environment',
        onPhotoTaken: (imageData, content) => {
          this.ngZone.run(() => {
            this.photoTaken.emit({ imageData, content });
          });
        },
        onError: (error) => {
          this.ngZone.run(() => {
            this.captureError.emit(error);
          });
        },
      };
    }
  }
}

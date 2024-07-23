import {
  Component,
  OnInit,
  NgZone,
  EventEmitter,
  Output,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { OnPhotoTakenEventValue } from '../../types';
import '@innovatrics/dot-face-auto-capture';
import type {
  FaceComponentData,
  HTMLFaceCaptureElement,
} from '@innovatrics/dot-face-auto-capture';

@Component({
  selector: 'app-face-camera',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <x-dot-face-auto-capture
      id="x-dot-face-auto-capture"
    ></x-dot-face-auto-capture>
  `,
})
export class FaceCameraComponent implements OnInit {
  @Output() photoTaken = new EventEmitter<
    OnPhotoTakenEventValue<FaceComponentData>
  >();
  @Output() captureError = new EventEmitter<Error>();

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.initFaceAutoCapture();
  }

  initFaceAutoCapture() {
    const faceElement = document.getElementById(
      'x-dot-face-auto-capture',
    ) as HTMLFaceCaptureElement | null;

    if (faceElement) {
      faceElement.cameraOptions = {
        cameraFacing: 'user',
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

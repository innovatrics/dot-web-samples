import { Component, OnInit, NgZone, EventEmitter, Output } from '@angular/core';
import { OnPhotoTakenEventValue } from 'src/app/types';
import '@innovatrics/dot-face-auto-capture';
import type { FaceComponentData, HTMLFaceCaptureElement } from '@innovatrics/dot-face-auto-capture';

@Component({
  selector: 'app-face-camera',
  templateUrl: './face-camera.component.html',
  styleUrls: ['./face-camera.component.css'],
})
export class FaceCameraComponent implements OnInit {
  @Output() onPhotoTaken = new EventEmitter<OnPhotoTakenEventValue<FaceComponentData>>();
  @Output() onError = new EventEmitter<Error>();

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    this.initFaceAutoCapture();
  }

  initFaceAutoCapture() {
    const faceElement = document.getElementById(
      'dot-face-auto-capture'
    ) as HTMLFaceCaptureElement | null;

    if (faceElement) {
      faceElement.cameraOptions = {
        cameraFacing: 'user',
        onPhotoTaken: (imageData, content) => {
          this.ngZone.run(() => {
            this.onPhotoTaken.emit({ imageData, content });
          });
        },
        onError: (error) => {
          this.ngZone.run(() => {
            this.onError.emit(error);
          });
        },
      };
    }
  }
}

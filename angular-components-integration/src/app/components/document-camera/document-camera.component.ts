import { Component, OnInit, NgZone, EventEmitter, Output } from '@angular/core';
import { OnPhotoTakenEventValue } from 'src/app/types';
import '@innovatrics/dot-document-auto-capture';
import type { HTMLDocumentCaptureElement } from '@innovatrics/dot-document-auto-capture';

@Component({
  selector: 'app-document-camera',
  templateUrl: './document-camera.component.html',
  styleUrls: ['./document-camera.component.css'],
})
export class DocumentCameraComponent implements OnInit {
  @Output() onPhotoTaken = new EventEmitter<OnPhotoTakenEventValue>();
  @Output() onError = new EventEmitter<Error>();

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.initDocumentAutoCapture();
  }

  initDocumentAutoCapture() {
    const documentElement = document.getElementById(
      'dot-document-auto-capture'
    ) as HTMLDocumentCaptureElement | null;

    if (documentElement) {
      documentElement.cameraOptions = {
        imageType: 'png',
        cameraFacing: 'environment',
        onPhotoTaken: (image, data) => {
          this.ngZone.run(() => {
            this.onPhotoTaken.emit({ image, data });
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

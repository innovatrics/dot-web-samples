import { Component, OnInit, NgZone, EventEmitter, Output } from '@angular/core';
import { OnPhotoTakenEventValue } from 'src/app/types';
import '@innovatrics/dot-document-auto-capture';
import type { DocumentComponentData, HTMLDocumentCaptureElement } from '@innovatrics/dot-document-auto-capture';

@Component({
  selector: 'app-document-camera',
  templateUrl: './document-camera.component.html',
  styleUrls: ['./document-camera.component.css'],
})
export class DocumentCameraComponent implements OnInit {
  @Output() onPhotoTaken = new EventEmitter<OnPhotoTakenEventValue<DocumentComponentData>>();
  @Output() onError = new EventEmitter<Error>();

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    this.initDocumentAutoCapture();
  }

  initDocumentAutoCapture() {
    const documentElement = document.getElementById(
      'dot-document-auto-capture'
    ) as HTMLDocumentCaptureElement | null;

    if (documentElement) {
      documentElement.cameraOptions = {
        cameraFacing: 'environment',
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

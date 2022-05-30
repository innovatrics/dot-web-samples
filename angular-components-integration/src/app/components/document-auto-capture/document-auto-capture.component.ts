import { Component, OnInit, Output, EventEmitter, NgZone } from '@angular/core';
import { PhotoTakenCbProps } from 'src/app/types';
import '@innovatrics/dot-document-auto-capture';
import { HTMLDocumentCaptureElement } from '@innovatrics/auto-capture';

@Component({
  selector: 'app-document-auto-capture',
  templateUrl: './document-auto-capture.component.html',
})
export class DocumentAutoCaptureComponent implements OnInit {
  @Output() photoTakenCallBack = new EventEmitter<PhotoTakenCbProps>();
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
        detectionLayerVisible: true,
        photoTakenCb: (image, data) => {
          this.ngZone.run(() => {
            this.photoTakenCallBack.emit({ image, data });
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

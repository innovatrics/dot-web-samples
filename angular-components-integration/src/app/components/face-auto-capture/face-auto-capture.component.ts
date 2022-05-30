import { Component, NgZone, OnInit, Output, EventEmitter } from '@angular/core';
import { PhotoTakenCbProps } from 'src/app/types';
import '@innovatrics/dot-face-auto-capture'
import { HTMLDocumentCaptureElement } from '@innovatrics/auto-capture';

@Component({
  selector: 'app-face-auto-capture',
  templateUrl: './face-auto-capture.component.html',
})
export class FaceAutoCaptureComponent implements OnInit {
  @Output() photoTakenCallBack = new EventEmitter<PhotoTakenCbProps>();
  @Output() onError = new EventEmitter<Error>();

  constructor(private ngzone: NgZone) { }

  ngOnInit(): void {
    this.initFaceAutoCapture();
  }

  initFaceAutoCapture() {
    const faceElement = document.getElementById('dot-face-auto-capture') as HTMLDocumentCaptureElement | null;

    if (faceElement) {
      faceElement.cameraOptions = {
        imageType: 'png',
        cameraFacing: 'environment',
        photoTakenCb: (image, data) => {
          this.ngzone.run(() => {
            this.photoTakenCallBack.emit({ image, data });
          });
        },
        onError: (error) => {
          this.ngzone.run(() => {
            this.onError.emit(error);
          });
        },
      }
    }
  }

}

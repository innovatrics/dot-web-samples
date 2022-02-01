import { Component, NgZone, OnInit, Output, EventEmitter } from '@angular/core';
import { HTMLDocumentCaptureElement, PhotoTakenCbProps } from 'src/app/types';
import '@innovatrics/dot-face-auto-capture'

@Component({
  selector: 'app-face-auto-capture',
  templateUrl: './face-auto-capture.component.html',
})
export class FaceAutoCaptureComponent implements OnInit {
  @Output() photoTakenCallBack = new EventEmitter<PhotoTakenCbProps>();

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
        }
      }
    }
  }

}

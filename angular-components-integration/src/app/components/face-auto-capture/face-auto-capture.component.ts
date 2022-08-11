import { Component, NgZone, OnInit, Output, EventEmitter } from '@angular/core';
import { PhotoTakenCbProps, Step } from 'src/app/types';
import '@innovatrics/dot-face-auto-capture'
import type { HTMLDocumentCaptureElement } from '@innovatrics/dot-document-auto-capture';

@Component({
  selector: 'app-face-auto-capture',
  templateUrl: './face-auto-capture.component.html',
})
export class FaceAutoCaptureComponent implements OnInit {
  @Output() photoTakenCallBack = new EventEmitter<PhotoTakenCbProps>();
  @Output() onError = new EventEmitter<Error>();
  @Output() backBtnClick = new EventEmitter<Step>();

  isButtonDisabled = true;

  constructor(private ngzone: NgZone) { }

  ngOnInit(): void {
    this.initFaceAutoCapture();
  }

  onBackClick() {
    this.backBtnClick.emit(Step.SELECT_COMPONENT)
  }

  handleContinue() {
    document.dispatchEvent(
      new CustomEvent('face-auto-capture', {
        detail: { instruction: 'continue-detection' },
      }),
    );

    this.isButtonDisabled = true;
  }

  initFaceAutoCapture() {
    const faceElement = document.getElementById('dot-face-auto-capture') as HTMLDocumentCaptureElement | null;

    if (faceElement) {
      faceElement.cameraOptions = {
        imageType: 'png',
        cameraFacing: 'environment',
        photoTakenCb: (image, data) => {
          this.isButtonDisabled = false;
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

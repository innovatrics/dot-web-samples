import { Component, OnInit, Output, EventEmitter, NgZone } from '@angular/core';
import { PhotoTakenCbProps, Step } from 'src/app/types';
import '@innovatrics/dot-document-auto-capture';
import { HTMLDocumentCaptureElement } from '@innovatrics/auto-capture';

@Component({
  selector: 'app-document-auto-capture',
  templateUrl: './document-auto-capture.component.html',
})
export class DocumentAutoCaptureComponent implements OnInit {
  @Output() photoTakenCallBack = new EventEmitter<PhotoTakenCbProps>();
  @Output() onError = new EventEmitter<Error>();
  @Output() backBtnClick = new EventEmitter<Step>();

  isButtonDisabled = true;

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    this.initDocumentAutoCapture();
  }

  onBackClick() {
    this.backBtnClick.emit(Step.SELECT_COMPONENT)
  }

  handleContinue() {
    document.dispatchEvent(
      new CustomEvent('document-auto-capture', {
        detail: { instruction: 'continue-detection' },
      }),
    );

    this.isButtonDisabled = true;
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
          this.isButtonDisabled = false;
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

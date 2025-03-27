import { Component, Output, EventEmitter } from '@angular/core';
import { Step } from '../types';

@Component({
  selector: 'app-component-select',
  template: `
    <div>
      <button (click)="onFaceClick()" class="button">Face</button>
      <button (click)="onDocumentClick()" class="button">Document</button>
      <button (click)="onPalmClick()" class="button">Palm</button>
      <button (click)="onMagnifEyeLivenessClick()" class="button">
        MagnifEye Liveness
      </button>
      <button (click)="onSmileLivenessClick()" class="button">
        Smile Liveness
      </button>
    </div>
  `,
  standalone: true,
})
export class ComponentSelectComponent {
  @Output() btnClick = new EventEmitter<Step>();

  onFaceClick() {
    this.btnClick.emit(Step.FACE_CAPTURE);
  }

  onDocumentClick() {
    this.btnClick.emit(Step.DOCUMENT_CAPTURE);
  }

  onPalmClick() {
    this.btnClick.emit(Step.PALM_CAPTURE);
  }

  onMagnifEyeLivenessClick() {
    this.btnClick.emit(Step.MAGNIFEYE_LIVENESS);
  }

  onSmileLivenessClick() {
    this.btnClick.emit(Step.SMILE_LIVENESS);
  }
}

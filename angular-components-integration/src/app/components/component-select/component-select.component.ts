import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Step } from '../../types';

@Component({
  selector: 'app-component-select',
  templateUrl: './component-select.component.html',
})
export class ComponentSelectComponent implements OnInit {
  @Output() btnClick = new EventEmitter<Step>();

  constructor() { }

  ngOnInit(): void { }

  onFaceClick() {
    this.btnClick.emit(Step.FACE_CAPTURE);
  }

  onDocumentClick() {
    this.btnClick.emit(Step.DOCUMENT_CAPTURE);
  }

  onMagnifEyeLivenessClick() {
    this.btnClick.emit(Step.MAGNIFEYE_LIVENESS);
  }
}

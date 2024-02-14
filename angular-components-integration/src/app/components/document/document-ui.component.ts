import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HTMLDocumentUiElement } from '@innovatrics/dot-auto-capture-ui/document';
import '@innovatrics/dot-auto-capture-ui/document';

@Component({
  selector: 'app-document-ui',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `<x-dot-document-auto-capture-ui
    id="dot-document-auto-capture-ui"
  />`,
  standalone: true,
})
export class DocumentUiComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.initDocumentUi();
  }

  initDocumentUi() {
    const documentUiElement = document.getElementById(
      'dot-document-auto-capture-ui',
    ) as HTMLDocumentUiElement | null;

    if (documentUiElement) {
      documentUiElement.props = {
        showCameraButtons: true,
      };
    }
  }
}

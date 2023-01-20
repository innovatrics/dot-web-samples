import { Component, OnInit } from '@angular/core';
import { HTMLDocumentUiElement } from '@innovatrics/dot-auto-capture-ui/document';
import '@innovatrics/dot-auto-capture-ui/document';

@Component({
  selector: 'app-document-ui',
  templateUrl: './document-ui.component.html',
  styleUrls: ['./document-ui.component.css'],
})
export class DocumentUiComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.initDocumentUi();
  }

  initDocumentUi() {
    const documentUiElement = document.getElementById(
      'dot-document-auto-capture-ui'
    ) as HTMLDocumentUiElement | null;

    if (documentUiElement) {
      documentUiElement.props = {
        showCameraButtons: true,
      };
    }
  }
}

import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { HTMLFacetUiElement } from '@innovatrics/dot-auto-capture-ui/face';
import '@innovatrics/dot-auto-capture-ui/face';

@Component({
  selector: 'app-face-ui',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <x-dot-face-auto-capture-ui
      id="x-dot-face-auto-capture-ui"
    ></x-dot-face-auto-capture-ui>
  `,
})
export class FaceUiComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.initFaceUi();
  }

  initFaceUi() {
    const faceUiElement = document.getElementById(
      'x-dot-face-auto-capture-ui',
    ) as HTMLFacetUiElement | null;

    if (faceUiElement) {
      faceUiElement.props = {
        showCameraButtons: true,
      };
    }
  }
}

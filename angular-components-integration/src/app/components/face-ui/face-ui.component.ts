import { Component, OnInit } from '@angular/core';
import { HTMLFacetUiElement } from '@innovatrics/dot-auto-capture-ui/face';
import '@innovatrics/dot-auto-capture-ui/face';

@Component({
  selector: 'app-face-ui',
  templateUrl: './face-ui.component.html',
  styleUrls: ['./face-ui.component.css'],
})
export class FaceUiComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.initFaceUi();
  }

  initFaceUi() {
    const faceUiElement = document.getElementById(
      'dot-face-auto-capture-ui'
    ) as HTMLFacetUiElement | null;

    if (faceUiElement) {
      faceUiElement.props = {
        showCameraButtons: true,
      };
    }
  }
}

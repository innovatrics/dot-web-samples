import { Component, OnInit } from '@angular/core';
import type { HTMLSmileLivenessUiElement } from '@innovatrics/dot-auto-capture-ui/smile-liveness';
import '@innovatrics/dot-auto-capture-ui/smile-liveness';

@Component({
  selector: 'app-smile-liveness-ui',
  templateUrl: './smile-liveness-ui.component.html',
  styleUrls: ['./smile-liveness-ui.component.css']
})
export class SmileLivenessUiComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.initSmileLivenessUi();
  }

  initSmileLivenessUi() {
    const smileUiElement = document.getElementById(
      'x-dot-smile-liveness-ui'
    ) as HTMLSmileLivenessUiElement | null;

    if (smileUiElement) {
      smileUiElement.props = {
        showCameraButtons: true,
      };
    }
  }
}

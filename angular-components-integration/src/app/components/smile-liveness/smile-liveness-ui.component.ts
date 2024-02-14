import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import type { HTMLSmileLivenessUiElement } from '@innovatrics/dot-auto-capture-ui/smile-liveness';
import '@innovatrics/dot-auto-capture-ui/smile-liveness';

@Component({
  selector: 'app-smile-liveness-ui',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <x-dot-smile-liveness-ui
      id="x-dot-smile-liveness-ui"
    ></x-dot-smile-liveness-ui>
  `,
})
export class SmileLivenessUiComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.initSmileLivenessUi();
  }

  initSmileLivenessUi() {
    const smileUiElement = document.getElementById(
      'x-dot-smile-liveness-ui',
    ) as HTMLSmileLivenessUiElement | null;

    if (smileUiElement) {
      smileUiElement.props = {
        showCameraButtons: true,
      };
    }
  }
}

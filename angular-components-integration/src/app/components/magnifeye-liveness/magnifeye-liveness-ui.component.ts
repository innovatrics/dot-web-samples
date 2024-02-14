import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import type { HTMLMagnifEyeLivenessUiElement } from '@innovatrics/dot-auto-capture-ui/magnifeye-liveness';
import '@innovatrics/dot-auto-capture-ui/magnifeye-liveness';

@Component({
  selector: 'app-magnifeye-liveness-ui',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <x-dot-magnifeye-liveness-ui
      id="x-dot-magnifeye-liveness-ui"
    ></x-dot-magnifeye-liveness-ui>
  `,
})
export class MagnifEyeLivenessUiComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.initMagnifEyeLivenessUi();
  }

  initMagnifEyeLivenessUi() {
    const magnifEyeUiElement = document.getElementById(
      'x-dot-magnifeye-liveness-ui',
    ) as HTMLMagnifEyeLivenessUiElement | null;

    if (magnifEyeUiElement) {
      magnifEyeUiElement.props = {
        showCameraButtons: true,
      };
    }
  }
}

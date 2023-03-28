import { Component, OnInit } from '@angular/core';
import type { HTMLMagnifEyeLivenessUiElement } from '@innovatrics/dot-auto-capture-ui/magnifeye-liveness';
import '@innovatrics/dot-auto-capture-ui/magnifeye-liveness';

@Component({
  selector: 'app-magnifeye-liveness-ui',
  templateUrl: './magnifeye-liveness-ui.component.html',
  styleUrls: ['./magnifeye-liveness-ui.component.css']
})
export class MagnifEyeLivenessUiComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.initMagnifEyeLivenessUi();
  }

  initMagnifEyeLivenessUi() {
    const magnifEyeUiElement = document.getElementById(
      'x-dot-magnifeye-liveness-ui'
    ) as HTMLMagnifEyeLivenessUiElement | null;

    if (magnifEyeUiElement) {
      magnifEyeUiElement.props = {
        showCameraButtons: true,
      };
    }
  }
}

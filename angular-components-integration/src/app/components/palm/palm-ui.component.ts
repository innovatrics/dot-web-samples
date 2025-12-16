import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HTMLPalmUiElement } from '@innovatrics/dot-auto-capture-ui/palm';
import '@innovatrics/dot-auto-capture-ui/palm';

@Component({
  selector: 'app-palm-ui',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `<x-dot-palm-capture-ui id="x-dot-palm-capture-ui" />`,
  standalone: true,
})
export class PalmUiComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.initPalmUi();
  }

  initPalmUi() {
    const palmUiElement = document.getElementById(
      'x-dot-palm-capture-ui',
    ) as HTMLPalmUiElement | null;

    if (palmUiElement) {
      palmUiElement.configuration = {
        control: {
          showCameraButtons: true,
        },
      };
    }
  }
}

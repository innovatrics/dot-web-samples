import type { OnInit } from '@angular/core';
import type { HTMLMultiRangeLivenessUiElement } from '@innovatrics/dot-auto-capture-ui/ui/src/types/multi-range';

import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import '@innovatrics/dot-auto-capture-ui/multi-range-liveness';

@Component({
  selector: 'app-multi-range-liveness-ui',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: ` <x-dot-multi-range-liveness-ui id="x-dot-multi-range-liveness-ui"></x-dot-multi-range-liveness-ui> `,
})
export class MultiRangeLivenessUiComponent implements OnInit {
  ngOnInit(): void {
    this.initMultiRangeLivenessUi();
  }

  initMultiRangeLivenessUi() {
    const multiRangeUiElement = document.getElementById(
      'x-dot-multi-range-liveness-ui',
    ) as HTMLMultiRangeLivenessUiElement | null;

    if (multiRangeUiElement) {
      multiRangeUiElement.props = {
        showCameraButtons: true,
      };
    }
  }
}

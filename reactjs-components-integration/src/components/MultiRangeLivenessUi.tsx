import '@innovatrics/dot-auto-capture-ui/multi-range-liveness';

import type {
  HTMLMultiRangeLivenessUiElement,
  MultiRangeUiConfiguration,
} from '@innovatrics/dot-auto-capture-ui/multi-range-liveness';

import { useEffect } from 'react';

function MultiRangeLivenessUi(configuration: MultiRangeUiConfiguration) {
  useEffect(() => {
    const uiElement = document.getElementById(
      'x-dot-multi-range-liveness-ui'
    ) as HTMLMultiRangeLivenessUiElement | null;

    if (uiElement) {
      uiElement.configuration = configuration;
    }
  });

  return <x-dot-multi-range-liveness-ui id="x-dot-multi-range-liveness-ui" />;
}

export default MultiRangeLivenessUi;

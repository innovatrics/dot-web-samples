import '@innovatrics/dot-auto-capture-ui/multi-range-liveness';

import type {
  HTMLMultiRangeLivenessUiElement,
  MultiRangeUiProps,
} from '@innovatrics/dot-auto-capture-ui/ui/src/types/multi-range';

import { useEffect } from 'react';

function MultiRangeLivenessUi(props: MultiRangeUiProps) {
  useEffect(() => {
    const uiElement = document.getElementById(
      'x-dot-multi-range-liveness-ui',
    ) as HTMLMultiRangeLivenessUiElement | null;

    if (uiElement) {
      uiElement.props = props;
    }
  });

  return <x-dot-multi-range-liveness-ui id="x-dot-multi-range-liveness-ui" />;
}

export default MultiRangeLivenessUi;

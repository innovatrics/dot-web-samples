import '@innovatrics/dot-multi-range-liveness';
import type {
  Configuration,
  HTMLMultiRangeLivenessElement,
} from '@innovatrics/dot-multi-range-liveness';

import { useEffect } from 'react';

function MultiRangeLivenessCamera(configuration: Configuration) {
  useEffect(() => {
    const multiRangeLivenessHTMLElement = document.getElementById(
      'x-dot-multi-range-liveness'
    ) as HTMLMultiRangeLivenessElement | null;

    if (multiRangeLivenessHTMLElement) {
      multiRangeLivenessHTMLElement.configuration = configuration;
    }
  });

  return <x-dot-multi-range-liveness id="x-dot-multi-range-liveness" />;
}

export default MultiRangeLivenessCamera;

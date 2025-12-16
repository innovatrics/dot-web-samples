import '@innovatrics/dot-auto-capture-ui/palm';
import type { HTMLPalmUiElement, PalmUiConfiguration } from '@innovatrics/dot-auto-capture-ui/palm';

import { useEffect } from 'react';

function PalmUi(configuration: PalmUiConfiguration) {
  useEffect(() => {
    const uiElement = document.getElementById('x-dot-palm-capture-ui') as HTMLPalmUiElement | null;

    if (uiElement) {
      uiElement.configuration = configuration;
    }
  });

  return <x-dot-palm-capture-ui id="x-dot-palm-capture-ui" />;
}

export default PalmUi;

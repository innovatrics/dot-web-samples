import '@innovatrics/dot-auto-capture-ui/smile-liveness';

import type {
  SmileLivenessUiConfiguration,
  HTMLSmileLivenessUiElement,
} from '@innovatrics/dot-auto-capture-ui/smile-liveness';
import { useEffect } from 'react';

function SmileLivenessUi(configuration: SmileLivenessUiConfiguration) {
  useEffect(() => {
    const uiElement = document.getElementById('x-dot-smile-liveness-ui') as HTMLSmileLivenessUiElement | null;

    if (uiElement) {
      uiElement.configuration = configuration;
    }
  });

  return <x-dot-smile-liveness-ui id="x-dot-smile-liveness-ui" />;
}

export default SmileLivenessUi;

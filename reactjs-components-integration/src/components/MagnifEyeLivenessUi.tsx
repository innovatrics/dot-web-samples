import '@innovatrics/dot-auto-capture-ui/magnifeye-liveness';
import type {
  HTMLMagnifEyeLivenessUiElement,
  MagnifEyeLivenessUiConfiguration,
} from '@innovatrics/dot-auto-capture-ui/magnifeye-liveness';

import { useEffect } from 'react';

function MagnifEyeLivenessUi(configuration: MagnifEyeLivenessUiConfiguration) {
  useEffect(() => {
    const uiElement = document.getElementById('x-dot-magnifeye-liveness-ui') as HTMLMagnifEyeLivenessUiElement | null;

    if (uiElement) {
      uiElement.configuration = configuration;
    }
  });

  return <x-dot-magnifeye-liveness-ui id="x-dot-magnifeye-liveness-ui" />;
}

export default MagnifEyeLivenessUi;

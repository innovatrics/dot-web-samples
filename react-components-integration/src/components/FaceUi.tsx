import type { FaceUiConfiguration, HTMLFacetUiElement } from '@innovatrics/dot-auto-capture-ui/face';

import { useEffect } from 'react';
import '@innovatrics/dot-auto-capture-ui/face';

function FaceUi(configuration: FaceUiConfiguration) {
  useEffect(() => {
    const uiElement = document.getElementById('x-dot-face-auto-capture-ui') as HTMLFacetUiElement | null;

    if (uiElement) {
      uiElement.configuration = configuration;
    }
  });

  return <x-dot-face-auto-capture-ui id="x-dot-face-auto-capture-ui" />;
}

export default FaceUi;

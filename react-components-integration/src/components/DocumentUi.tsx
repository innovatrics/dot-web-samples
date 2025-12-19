import '@innovatrics/dot-auto-capture-ui/document';
import type { DocumentUiConfiguration, HTMLDocumentUiElement } from '@innovatrics/dot-auto-capture-ui/document';

import { useEffect } from 'react';

function DocumentUi(configuration: DocumentUiConfiguration) {
  useEffect(() => {
    const uiElement = document.getElementById('x-dot-document-auto-capture-ui') as HTMLDocumentUiElement | null;

    if (uiElement) {
      uiElement.configuration = configuration;
    }
  });

  return <x-dot-document-auto-capture-ui id="x-dot-document-auto-capture-ui" />;
}

export default DocumentUi;

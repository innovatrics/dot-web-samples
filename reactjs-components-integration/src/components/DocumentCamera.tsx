import '@innovatrics/dot-document-auto-capture';
import type { DocumentConfiguration, HTMLDocumentCaptureElement } from '@innovatrics/dot-document-auto-capture';

import { useEffect } from 'react';

/*
 * When component is initiliazed, sam.wasm file will be fetched from http://localhost:3000/sam.wasm.
 * That's why sam.wasm file need to be placed in root of public folder.
 */

function DocumentCamera(configuration: DocumentConfiguration) {
  useEffect(() => {
    // 2. Init existed custom web-component
    const documentAutoCaptureHTMLElement = document.getElementById(
      'x-dot-document-auto-capture'
    ) as HTMLDocumentCaptureElement | null;

    if (documentAutoCaptureHTMLElement) {
      documentAutoCaptureHTMLElement.configuration = configuration;
    }
  });

  // 1. Return empty custom web-component html TAG
  return <x-dot-document-auto-capture id="x-dot-document-auto-capture" />;
}

export default DocumentCamera;

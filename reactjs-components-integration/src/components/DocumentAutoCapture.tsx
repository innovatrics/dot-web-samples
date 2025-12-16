import type {
  DocumentOnCompleteCallback,
  DocumentOnCompleteCallbackImage,
} from '@innovatrics/dot-document-auto-capture';

import {
  ControlEventInstruction,
  dispatchControlEvent,
  DocumentCustomEvent,
} from '@innovatrics/dot-document-auto-capture/events';
import { useState } from 'react';

import buttonStyles from '../styles/button.module.css';
import styles from '../styles/index.module.css';

import DocumentCamera from './DocumentCamera';
import DocumentUi from './DocumentUi';

interface Props {
  onBackClick: () => void;
  onError: (error: Error) => void;
  onComplete: DocumentOnCompleteCallback;
}

function DocumentAutoCapture({ onBackClick, onError, onComplete }: Props) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  function handlePhotoTaken(imageData: DocumentOnCompleteCallbackImage, content: Uint8Array) {
    setIsButtonDisabled(false);
    onComplete(imageData, content);
  }

  const handleContinueDetection = () => {
    dispatchControlEvent(DocumentCustomEvent.CONTROL, ControlEventInstruction.CONTINUE_DETECTION);

    setIsButtonDisabled(true);
  };

  return (
    <>
      <h2>Document auto capture</h2>
      <div>
        <button className={buttonStyles.primary} onClick={onBackClick}>
          Go back
        </button>
        <button className={buttonStyles.primary} disabled={isButtonDisabled} onClick={handleContinueDetection}>
          Continue detection
        </button>
      </div>
      {/* parent container must have position: relative */}
      <div className={styles.container}>
        <DocumentCamera camera={{ facingMode: 'environment' }} onComplete={handlePhotoTaken} onError={onError} />
        <DocumentUi control={{ showCameraButtons: true }} />
      </div>
    </>
  );
}

export default DocumentAutoCapture;

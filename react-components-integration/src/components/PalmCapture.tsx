import type { PalmOnCompleteCallback, PalmOnCompleteCallbackImage } from '@innovatrics/dot-palm-capture';

import { ControlEventInstruction, dispatchControlEvent, PalmCustomEvent } from '@innovatrics/dot-palm-capture/events';
import { useState } from 'react';

import buttonStyles from '../styles/button.module.css';
import styles from '../styles/index.module.css';

import PalmCamera from './PalmCamera';
import PalmUi from './PalmUi';

interface Props {
  onBackClick: () => void;
  onError: (error: Error) => void;
  onComplete: PalmOnCompleteCallback;
}

function PalmCapture({ onBackClick, onError, onComplete }: Props) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  async function handlePhotoTaken(imageData: PalmOnCompleteCallbackImage, content: Uint8Array) {
    setIsButtonDisabled(false);
    onComplete(imageData, content);
  }

  const handleContinueDetection = () => {
    dispatchControlEvent(PalmCustomEvent.CONTROL, ControlEventInstruction.CONTINUE_DETECTION);

    setIsButtonDisabled(true);
  };

  return (
    <>
      <h2>Palm auto capture</h2>
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
        <PalmCamera camera={{ facingMode: 'environment' }} onComplete={handlePhotoTaken} onError={onError} />
        <PalmUi control={{ showCameraButtons: true }} />
      </div>
    </>
  );
}

export default PalmCapture;

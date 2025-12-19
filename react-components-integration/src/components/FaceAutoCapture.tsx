import type { FaceOnCompleteCallback, FaceOnCompleteCallbackImage } from '@innovatrics/dot-face-auto-capture';

import {
  ControlEventInstruction,
  dispatchControlEvent,
  FaceCustomEvent,
} from '@innovatrics/dot-face-auto-capture/events';
import { useState } from 'react';

import buttonStyles from '../styles/button.module.css';
import styles from '../styles/index.module.css';

import FaceCamera from './FaceCamera';
import FaceUi from './FaceUi';

interface Props {
  onBackClick: () => void;
  onError: (error: Error) => void;
  onComplete: FaceOnCompleteCallback;
}

function FaceAutoCapture({ onBackClick, onError, onComplete }: Props) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  async function handlePhotoTaken(imageData: FaceOnCompleteCallbackImage, content: Uint8Array) {
    setIsButtonDisabled(false);
    onComplete(imageData, content);
  }

  const handleContinueDetection = () => {
    dispatchControlEvent(FaceCustomEvent.CONTROL, ControlEventInstruction.CONTINUE_DETECTION);

    setIsButtonDisabled(true);
  };

  return (
    <>
      <h2>Face auto capture</h2>
      <div>
        <button className={buttonStyles.primary} onClick={onBackClick}>
          Go back
        </button>
        <button className={buttonStyles.primary} disabled={isButtonDisabled} onClick={handleContinueDetection}>
          Continue detection
        </button>
      </div>
      <div className={styles.container}>
        <FaceCamera camera={{ facingMode: 'user' }} onComplete={handlePhotoTaken} onError={onError} />
        <FaceUi control={{ showCameraButtons: true }} />
      </div>
    </>
  );
}

export default FaceAutoCapture;

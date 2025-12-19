import type {
  MagnifEyeLivenessOnCompleteCallback,
  MagnifEyeLivenessOnCompleteCallbackImage,
} from '@innovatrics/dot-magnifeye-liveness';

import {
  ControlEventInstruction,
  dispatchControlEvent,
  MagnifEyeCustomEvent,
} from '@innovatrics/dot-magnifeye-liveness/events';
import { useState } from 'react';

import buttonStyles from '../styles/button.module.css';
import styles from '../styles/index.module.css';

import MagnifEyeLivenessCamera from './MagnifEyeLivenessCamera';
import MagnifEyeLivenessUi from './MagnifEyeLivenessUi';

interface Props {
  onBackClick: () => void;
  onComplete: MagnifEyeLivenessOnCompleteCallback;
  onError: (error: Error) => void;
}

function MagnifEyeLiveness({ onBackClick, onComplete, onError }: Props) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  async function handleOnComplete(imageData: MagnifEyeLivenessOnCompleteCallbackImage, content: Uint8Array) {
    setIsButtonDisabled(false);
    onComplete(imageData, content);
  }

  const handleContinueDetection = () => {
    dispatchControlEvent(MagnifEyeCustomEvent.CONTROL, ControlEventInstruction.CONTINUE_DETECTION);

    setIsButtonDisabled(true);
  };

  return (
    <>
      <h2>MagnifEye Liveness</h2>
      <div>
        <button className={buttonStyles.primary} onClick={onBackClick}>
          Go back
        </button>
        <button className={buttonStyles.primary} disabled={isButtonDisabled} onClick={handleContinueDetection}>
          Continue detection
        </button>
      </div>
      <div className={styles.container}>
        <MagnifEyeLivenessCamera onComplete={handleOnComplete} onError={onError} />
        <MagnifEyeLivenessUi control={{ showCameraButtons: true }} />
      </div>
    </>
  );
}

export default MagnifEyeLiveness;

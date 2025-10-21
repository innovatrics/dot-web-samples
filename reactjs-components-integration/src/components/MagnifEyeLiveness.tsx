import type { MagnifEyeLivenessCallback } from '@innovatrics/dot-magnifeye-liveness';

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
  onComplete: MagnifEyeLivenessCallback;
  onError: (error: Error) => void;
}

function MagnifEyeLiveness({ onBackClick, onComplete, onError }: Props) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleOnComplete: MagnifEyeLivenessCallback = async (imageData, content) => {
    setIsButtonDisabled(false);
    onComplete(imageData, content);
  };

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
        <MagnifEyeLivenessUi showCameraButtons />
      </div>
    </>
  );
}

export default MagnifEyeLiveness;

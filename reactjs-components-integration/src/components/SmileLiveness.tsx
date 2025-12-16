import type { OnCompleteCallback, OnCompleteCallbackImages } from '@innovatrics/dot-smile-liveness';

import { useState } from 'react';
import {
  dispatchControlEvent,
  SmileCustomEvent,
  ControlEventInstruction,
} from '@innovatrics/dot-smile-liveness/events';

import styles from '../styles/index.module.css';
import buttonStyles from '../styles/button.module.css';
import SmileLivenessCamera from './SmileLivenessCamera';
import SmileLivenessUi from './SmileLivenessUi';

interface Props {
  onComplete: OnCompleteCallback;
  onError: (error: Error) => void;
  onBackClick: () => void;
}

function SmileLiveness({ onBackClick, onComplete, onError }: Props) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  function handleOnComplete(imageData: OnCompleteCallbackImages, content: Uint8Array) {
    setIsButtonDisabled(false);
    onComplete(imageData, content);
  }

  const handleContinueDetection = () => {
    dispatchControlEvent(SmileCustomEvent.CONTROL, ControlEventInstruction.CONTINUE_DETECTION);

    setIsButtonDisabled(true);
  };

  return (
    <>
      <h2>Smile Liveness</h2>
      <div>
        <button className={buttonStyles.primary} onClick={onBackClick}>
          Go back
        </button>
        <button className={buttonStyles.primary} onClick={handleContinueDetection} disabled={isButtonDisabled}>
          Continue detection
        </button>
      </div>
      <div className={styles.container}>
        <SmileLivenessCamera onComplete={handleOnComplete} onError={onError} />
        <SmileLivenessUi control={{ showCameraButtons: true }} />
      </div>
    </>
  );
}

export default SmileLiveness;

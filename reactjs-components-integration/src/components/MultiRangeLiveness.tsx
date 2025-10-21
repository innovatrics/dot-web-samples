import type { OnCompleteCallback } from '@innovatrics/dot-multi-range-liveness';

import {
  ControlEventInstruction,
  dispatchControlEvent,
  MultiRangeCustomEvent,
} from '@innovatrics/dot-multi-range-liveness/events';
import { useState } from 'react';

import buttonStyles from '../styles/button.module.css';
import styles from '../styles/index.module.css';

import MultiRangeLivenessCamera from './MultiRangeLivenessCamera';
import MultiRangeLivenessUi from './MultiRangeLivenessUi';

interface Props {
  onBackClick: () => void;
  onComplete: OnCompleteCallback;
  onError: (error: Error) => void;
}

function MultiRangeLiveness({ onBackClick, onComplete, onError }: Props) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleOnComplete: OnCompleteCallback = async (imageData, content) => {
    setIsButtonDisabled(false);
    onComplete(imageData, content);
  };

  const handleContinueDetection = () => {
    dispatchControlEvent(
      MultiRangeCustomEvent.CONTROL,
      ControlEventInstruction.CONTINUE_DETECTION
    );

    setIsButtonDisabled(true);
  };

  return (
    <>
      <h2>MultiRange Liveness</h2>
      <div>
        <button className={buttonStyles.primary} onClick={onBackClick}>
          Go back
        </button>
        <button
          className={buttonStyles.primary}
          disabled={isButtonDisabled}
          onClick={handleContinueDetection}
        >
          Continue detection
        </button>
      </div>
      <div className={styles.container}>
        <MultiRangeLivenessCamera
          challengeSequence={['ONE', 'THREE', 'FIVE', 'ZERO']}
          onComplete={handleOnComplete}
          onError={onError}
        />
        <MultiRangeLivenessUi showCameraButtons />
      </div>
    </>
  );
}

export default MultiRangeLiveness;

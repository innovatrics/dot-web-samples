import type {
  PalmCallback,
  PalmComponentData,
} from "@innovatrics/dot-palm-capture";
import {
  dispatchControlEvent,
  PalmCustomEvent,
  ControlEventInstruction,
} from "@innovatrics/dot-palm-capture/events";
import { useState } from "react";
import styles from "../styles/index.module.css";
import buttonStyles from "../styles/button.module.css";
import PalmCamera from "./PalmCamera";
import PalmUi from "./PalmUi";

interface Props {
  onPhotoTaken: PalmCallback;
  onError: (error: Error) => void;
  onBackClick: () => void;
}

function PalmCapture({ onPhotoTaken, onError, onBackClick }: Props) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handlePhotoTaken: PalmCallback = async (imageData, content) => {
    setIsButtonDisabled(false);
    onPhotoTaken(imageData, content);
  };

  const handleContinueDetection = () => {
    dispatchControlEvent(
      PalmCustomEvent.CONTROL,
      ControlEventInstruction.CONTINUE_DETECTION,
    );

    setIsButtonDisabled(true);
  };

  return (
    <>
      <h2>Palm auto capture</h2>
      <div>
        <button className={buttonStyles.primary} onClick={onBackClick}>
          Go back
        </button>
        <button
          className={buttonStyles.primary}
          onClick={handleContinueDetection}
          disabled={isButtonDisabled}
        >
          Continue detection
        </button>
      </div>
      {/* parent container must have position: relative */}
      <div className={styles.container}>
        <PalmCamera
          cameraFacing="environment"
          onPhotoTaken={handlePhotoTaken}
          onError={onError}
        />
        <PalmUi showCameraButtons />
      </div>
    </>
  );
}

export default PalmCapture;

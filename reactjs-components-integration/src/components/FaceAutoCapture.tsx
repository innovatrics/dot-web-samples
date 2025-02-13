import type {
  FaceCallback,
  FaceComponentData,
} from "@innovatrics/dot-face-auto-capture";
import {
  dispatchControlEvent,
  FaceCustomEvent,
  ControlEventInstruction,
} from "@innovatrics/dot-face-auto-capture/events";
import { useState } from "react";
import styles from "../styles/index.module.css";
import buttonStyles from "../styles/button.module.css";
import FaceCamera from "./FaceCamera";
import FaceUi from "./FaceUi";

interface Props {
  onPhotoTaken: FaceCallback;
  onError: (error: Error) => void;
  onBackClick: () => void;
}

function FaceAutoCapture({ onPhotoTaken, onError, onBackClick }: Props) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handlePhotoTaken: FaceCallback = async (imageData, content) => {
    setIsButtonDisabled(false);
    onPhotoTaken(imageData, content);
  };

  const handleContinueDetection = () => {
    dispatchControlEvent(
      FaceCustomEvent.CONTROL,
      ControlEventInstruction.CONTINUE_DETECTION,
    );

    setIsButtonDisabled(true);
  };
  return (
    <>
      <h2>Face auto capture</h2>
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
      <div className={styles.container}>
        <FaceCamera
          cameraFacing="user"
          onPhotoTaken={handlePhotoTaken}
          onError={onError}
        />
        <FaceUi showCameraButtons />
      </div>
    </>
  );
}

export default FaceAutoCapture;

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

const FaceAutoCapture = ({ onPhotoTaken, onError, onBackClick }: Props) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handlePhotoTaken = (image: Blob, data: FaceComponentData) => {
    setIsButtonDisabled(false);
    onPhotoTaken(image, data);
  };

  const handleContinueDetection = () => {
    dispatchControlEvent(
      FaceCustomEvent.CONTROL,
      ControlEventInstruction.CONTINUE_DETECTION
    );

    setIsButtonDisabled(true);
  };
  return (
    <>
      <h2>Face auto capture</h2>
      <div>
        <button
          className={buttonStyles.primary}
          onClick={handleContinueDetection}
          disabled={isButtonDisabled}
        >
          Continue detection
        </button>
        <button className={buttonStyles.primary} onClick={onBackClick}>
          Back
        </button>
      </div>
      <div className={styles.container}>
        <FaceCamera
          imageType="png"
          cameraFacing="user"
          onPhotoTaken={handlePhotoTaken}
          onError={onError}
        />
        <FaceUi showCameraButtons/>
      </div>
    </>
  );
};

export default FaceAutoCapture;

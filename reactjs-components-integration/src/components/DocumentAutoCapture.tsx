import type {
  DocumentCallback,
  DocumentComponentData,
} from "@innovatrics/dot-document-auto-capture";
import {
  dispatchControlEvent,
  DocumentCustomEvent,
  ControlEventInstruction,
} from "@innovatrics/dot-document-auto-capture/events";
import { useState } from "react";
import styles from "../styles/index.module.css";
import buttonStyles from "../styles/button.module.css";
import DocumentCamera from "./DocumentCamera";
import DocumentUi from "./DocumentUi";

interface Props {
  onPhotoTaken: DocumentCallback;
  onError: (error: Error) => void;
  onBackClick: () => void;
}

const DocumentAutoCapture = ({ onPhotoTaken, onError, onBackClick }: Props) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handlePhotoTaken = (image: Blob, data: DocumentComponentData) => {
    setIsButtonDisabled(false);
    onPhotoTaken(image, data);
  };

  const handleContinueDetection = () => {
    dispatchControlEvent(
      DocumentCustomEvent.CONTROL,
      ControlEventInstruction.CONTINUE_DETECTION
    );

    setIsButtonDisabled(true);
  };

  return (
    <>
      <h2>Document auto capture</h2>
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
      {/* parent container must have position: relative */}
      <div className={styles.container}>
        <DocumentCamera
          imageType="png"
          cameraFacing="environment"
          onPhotoTaken={handlePhotoTaken}
          onError={onError}
        />
        <DocumentUi showCameraButtons/>
      </div>
    </>
  );
};

export default DocumentAutoCapture;

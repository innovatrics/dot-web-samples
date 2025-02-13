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

function DocumentAutoCapture({ onPhotoTaken, onError, onBackClick }: Props) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handlePhotoTaken: DocumentCallback = async (imageData, content) => {
    setIsButtonDisabled(false);
    onPhotoTaken(imageData, content);
  };

  const handleContinueDetection = () => {
    dispatchControlEvent(
      DocumentCustomEvent.CONTROL,
      ControlEventInstruction.CONTINUE_DETECTION,
    );

    setIsButtonDisabled(true);
  };

  return (
    <>
      <h2>Document auto capture</h2>
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
        <DocumentCamera
          cameraFacing="environment"
          onPhotoTaken={handlePhotoTaken}
          onError={onError}
        />
        <DocumentUi showCameraButtons />
      </div>
    </>
  );
}

export default DocumentAutoCapture;

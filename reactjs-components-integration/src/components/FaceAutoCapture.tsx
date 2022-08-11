import "@innovatrics/dot-face-auto-capture";
import type { FaceCallback, FaceCameraProps, FaceComponentData, HTMLFaceCaptureElement } from "@innovatrics/dot-face-auto-capture";
import { useEffect, useState } from "react";
import styles from '../styles/index.module.css';
import buttonStyles from "../styles/button.module.css";

interface Props {
  onPhotoTaken: FaceCallback;
  onError: (error: Error) => void;
  onBackClick: () => void;
}

/*
 * When component is initiliazed, sam.wasm file will be fetched from http://localhost:3000/sam.wasm.
 * That's why sam.wasm file need to be placed in root of public folder.
 */

const FaceCamera = (props: FaceCameraProps) => {
  useEffect(() => {
    // 2. Init existed custom web-component
    const faceAutoCaptureHTMLElement = document.getElementById(
      "x-dot-face-auto-capture"
    ) as HTMLFaceCaptureElement | null;

    if (faceAutoCaptureHTMLElement) {
      faceAutoCaptureHTMLElement.cameraOptions = props;
    }
  });

  // 1. Return empty custom web-component html TAG
  return <x-dot-face-auto-capture id="x-dot-face-auto-capture" />;
};

const FaceAutoCapture = ({ onPhotoTaken, onError, onBackClick }: Props) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handlePhotoTaken = (image: Blob, data: FaceComponentData) => {
    setIsButtonDisabled(false);
    onPhotoTaken(image, data);
  }

  const handleContinueDetection = () => {
    document.dispatchEvent(
      new CustomEvent('face-auto-capture', {
        detail: { instruction: 'continue-detection' },
      }),
    );

    setIsButtonDisabled(true);
  };
  return (
    <>
      <h2>Face auto capture</h2>
      <div>
        <button className={buttonStyles.primary} onClick={handleContinueDetection} disabled={isButtonDisabled}>
          Continue detection
        </button>
        <button className={buttonStyles.primary} onClick={onBackClick}>
          Back
        </button>
      </div>
      <div className={styles.container}>
        <FaceCamera
          imageType="png"
          cameraFacing="environment"
          photoTakenCb={handlePhotoTaken}
          onError={onError}
        />
      </div>
    </>
  );
};

export default FaceAutoCapture;

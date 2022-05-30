import { FaceCallback, FaceCameraProps, HTMLFaceCaptureElement } from "@innovatrics/auto-capture";
import "@innovatrics/dot-face-auto-capture";
import { useEffect } from "react";
import styles from "../styles/index.module.css";

interface Props {
  onPhotoTaken: FaceCallback;
  onError: (error: Error) => void;
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

const FaceAutoCapture = ({ onPhotoTaken, onError }: Props) => {
  return (
    <>
      <h2>Face auto capture</h2>
      <div className={styles.container}>
        <FaceCamera
          imageType="png"
          cameraFacing="environment"
          photoTakenCb={onPhotoTaken}
          onError={onError}
        />
      </div>
    </>
  );
};

export default FaceAutoCapture;

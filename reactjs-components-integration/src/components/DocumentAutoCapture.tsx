import '@innovatrics/dot-document-auto-capture';
import type { DocumentCallback, DocumentCameraProps, DocumentComponentData, HTMLDocumentCaptureElement } from '@innovatrics/dot-document-auto-capture';
import { useEffect, useState } from 'react';
import styles from '../styles/index.module.css';
import buttonStyles from "../styles/button.module.css";

interface Props {
  onPhotoTaken: DocumentCallback;
  onError: (error: Error) => void;
  onBackClick: () => void;
}

/*
 * When component is initiliazed, sam.wasm file will be fetched from http://localhost:3000/sam.wasm.
 * That's why sam.wasm file need to be placed in root of public folder.
 */

const DocumentCamera = (props: DocumentCameraProps) => {
  useEffect(() => {
    // 2. Init existed custom web-component
    const documentAutoCaptureHTMLElement = document.getElementById(
      'x-dot-document-auto-capture'
    ) as HTMLDocumentCaptureElement | null;

    if (documentAutoCaptureHTMLElement) {
      documentAutoCaptureHTMLElement.cameraOptions = props;
    }
  });

  // 1. Return empty custom web-component html TAG
  return <x-dot-document-auto-capture id="x-dot-document-auto-capture" />;
};

const DocumentAutoCapture = ({ onPhotoTaken, onError, onBackClick }: Props) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handlePhotoTaken = (image: Blob, data: DocumentComponentData) => {
    setIsButtonDisabled(false);
    onPhotoTaken(image, data);
  }

  const handleContinueDetection = () => {
    document.dispatchEvent(
      new CustomEvent('document-auto-capture', {
        detail: { instruction: 'continue-detection' },
      }),
    );

    setIsButtonDisabled(true);
  };

  return (
    <>
      <h2>Document auto capture</h2>
      <div>
        <button className={buttonStyles.primary} onClick={handleContinueDetection} disabled={isButtonDisabled}>
          Continue detection
        </button>
        <button className={buttonStyles.primary} onClick={onBackClick}>
          Back
        </button>
      </div>
      <div className={styles.container}>
        <DocumentCamera
          imageType="png"
          cameraFacing="environment"
          detectionLayerVisible
          photoTakenCb={handlePhotoTaken}
          onError={onError}
        />
      </div>
    </>
  );
};

export default DocumentAutoCapture;

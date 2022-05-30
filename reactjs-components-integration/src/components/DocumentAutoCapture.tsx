import { DocumentCallback, DocumentCameraProps, HTMLDocumentCaptureElement } from '@innovatrics/auto-capture';
import '@innovatrics/dot-document-auto-capture';
import { useEffect } from 'react';
import styles from '../styles/index.module.css';

interface Props {
  onPhotoTaken: DocumentCallback;
  onError: (error: Error) => void;
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

const DocumentAutoCapture = ({ onPhotoTaken, onError }: Props) => {
  return (
    <>
      <h2>Document auto capture</h2>
      <div className={styles.container}>
        <DocumentCamera
          imageType="png"
          cameraFacing="environment"
          detectionLayerVisible
          photoTakenCb={onPhotoTaken}
          onError={onError}
        />
      </div>
    </>
  );
};

export default DocumentAutoCapture;

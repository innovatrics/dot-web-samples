import { DocumentCallback, DocumentComponentData, FaceCallback, FaceComponentData } from "@innovatrics/auto-capture";
import { useState } from "react";
import ComponentSelect from "./components/ComponentSelect";
import DocumentAutoCapture from "./components/DocumentAutoCapture";
import FaceAutoCapture from "./components/FaceAutoCapture";
import PhotoResult from "./components/PhotoResult";
import styles from "./styles/index.module.css";
import { Step } from "./types";

function App() {
  const [step, setStep] = useState<Step>(Step.SELECT_COMPONENT);
  const [photoUrl, setPhotoUrl] = useState<string>();

  const handlePhotoTaken = (
    image: Blob,
    data: DocumentComponentData | FaceComponentData
  ) => {
    const imageUrl = URL.createObjectURL(image);
    setPhotoUrl(imageUrl);
    setStep(Step.IMAGE);
  };

  const handleDocumentPhotoTaken: DocumentCallback = (image, data) => {
    handlePhotoTaken(image, data);
  };

  const handleFaceCapturePhotoTaken: FaceCallback = (image, data) => {
    handlePhotoTaken(image, data);
  };

  const handleError = (error: Error) => {
    alert(error);
  }

  const renderStep = (step: Step) => {
    switch (step) {
      case Step.DOCUMENT_CAPTURE:
        return (
          <DocumentAutoCapture onPhotoTaken={handleDocumentPhotoTaken} onError={handleError} />
        );
      case Step.FACE_CAPTURE:
        return (
          <FaceAutoCapture onPhotoTaken={handleFaceCapturePhotoTaken} onError={handleError} />
        );
      case Step.IMAGE:
        return <PhotoResult photoUrl={photoUrl} setStep={setStep} />;
      default:
        return <ComponentSelect setStep={setStep} />;
    }
  };

  return (
    <div className={styles.app}>
      <h1>DOT Web Components Integration</h1>
      {renderStep(step)}
    </div>
  );
}

export default App;

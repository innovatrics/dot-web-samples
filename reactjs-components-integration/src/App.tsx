import type {
  CallbackImage,
  DocumentCallback,
  DocumentComponentData,
} from "@innovatrics/dot-document-auto-capture";
import type {
  FaceCallback,
  FaceComponentData,
} from "@innovatrics/dot-face-auto-capture";
import type { MagnifEyeLivenessCallback } from "@innovatrics/dot-magnifeye-liveness";
import { SmileLivenessCallback } from "@innovatrics/dot-smile-liveness";
import { useCallback, useState } from "react";
import ComponentSelect from "./components/ComponentSelect";
import DocumentAutoCapture from "./components/DocumentAutoCapture";
import FaceAutoCapture from "./components/FaceAutoCapture";
import MagnifEyeLiveness from "./components/MagnifEyeLiveness";
import PhotoResult from "./components/PhotoResult";
import SmileLiveness from "./components/SmileLiveness";
import styles from "./styles/index.module.css";
import { Step } from "./types";

function App() {
  const [step, setStep] = useState<Step>(Step.SELECT_COMPONENT);
  const [photoUrl, setPhotoUrl] = useState<string>();

  const handlePhotoTaken = <T,>(
    imageData: CallbackImage<T>,
    content?: Uint8Array,
  ) => {
    const imageUrl = URL.createObjectURL(imageData.image);
    setPhotoUrl(imageUrl);
  };

  const handleDocumentPhotoTaken: DocumentCallback = (imageData, content) => {
    handlePhotoTaken(imageData, content);
  };

  const handleFaceCapturePhotoTaken: FaceCallback = (imageData, content) => {
    handlePhotoTaken(imageData, content);
  };

  /**
   * At this point use @content property with Digital Identity Service in order to evaluate the MagnifEye liveness score.
   * See: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-dis/latest/documentation/#_magnifeye_liveness_check
   */
  const handleMagnifEyeComplete: MagnifEyeLivenessCallback = (
    imageData,
    content,
  ) => {
    handlePhotoTaken(imageData, content);
  };

  /**
   * At this point use @content property with Digital Identity Service in order to evaluate the Smile liveness score.
   */
  const handleSmileComplete: SmileLivenessCallback = (imageData, content) => {
    const [, smileImageData] = imageData;
    handlePhotoTaken(smileImageData, content);
  };

  const handleError = useCallback((error: Error) => {
    alert(error);
  }, []);

  const handleBackClick = () => {
    setPhotoUrl(undefined);
    setStep(Step.SELECT_COMPONENT);
  };

  const renderStep = (currentStep: Step) => {
    switch (currentStep) {
      case Step.DOCUMENT_CAPTURE:
        return (
          <>
            <DocumentAutoCapture
              onPhotoTaken={handleDocumentPhotoTaken}
              onError={handleError}
              onBackClick={handleBackClick}
            />
            {photoUrl && <PhotoResult photoUrl={photoUrl} />}
          </>
        );
      case Step.FACE_CAPTURE:
        return (
          <>
            <FaceAutoCapture
              onPhotoTaken={handleFaceCapturePhotoTaken}
              onError={handleError}
              onBackClick={handleBackClick}
            />
            {photoUrl && <PhotoResult photoUrl={photoUrl} />}
          </>
        );
      case Step.MAGNIFEYE_LIVENESS:
        return (
          <>
            <MagnifEyeLiveness
              onComplete={handleMagnifEyeComplete}
              onError={handleError}
              onBackClick={handleBackClick}
            />
            {photoUrl && <PhotoResult photoUrl={photoUrl} />}
          </>
        );
      case Step.SMILE_LIVENESS:
        return (
          <>
            <SmileLiveness
              onComplete={handleSmileComplete}
              onError={handleError}
              onBackClick={handleBackClick}
            />
            {photoUrl && <PhotoResult photoUrl={photoUrl} />}
          </>
        );
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

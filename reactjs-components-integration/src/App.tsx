import type { CallbackImage, DocumentOnCompleteCallbackImage } from '@innovatrics/dot-document-auto-capture';
import type { FaceOnCompleteCallbackImage } from '@innovatrics/dot-face-auto-capture';
import type { MagnifEyeLivenessOnCompleteCallbackImage } from '@innovatrics/dot-magnifeye-liveness';
import type { PalmOnCompleteCallbackImage } from '@innovatrics/dot-palm-capture';
import type { OnCompleteCallbackImages as SmileLivenessOnCompleteCallbackImages } from '@innovatrics/dot-smile-liveness';
import type { OnCompleteCallbackImage as MultiRangeLivenessOnCompleteCallbackImage } from '@innovatrics/dot-multi-range-liveness';

import { useCallback, useState } from 'react';

import ComponentSelect from './components/ComponentSelect';
import DocumentAutoCapture from './components/DocumentAutoCapture';
import FaceAutoCapture from './components/FaceAutoCapture';
import MagnifEyeLiveness from './components/MagnifEyeLiveness';
import MultiRangeLiveness from './components/MultiRangeLiveness';
import PalmCapture from './components/PalmCapture';
import PhotoResult from './components/PhotoResult';
import SmileLiveness from './components/SmileLiveness';
import styles from './styles/index.module.css';
import { Step } from './types';

/**
 * Use @content property with Digital Identity Service in order to evaluate the liveness score of each component.
 * See: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-dis/latest/documentation/#_magnifeye_liveness_check
 */
function App() {
  const [step, setStep] = useState<Step>(Step.SELECT_COMPONENT);
  const [photoUrl, setPhotoUrl] = useState<string>();

  function handlePhotoTaken<T>(imageData: CallbackImage<T>, _content?: Uint8Array) {
    const imageUrl = URL.createObjectURL(imageData.image);

    setPhotoUrl(imageUrl);
  }

  function handleDocumentComplete(imageData: DocumentOnCompleteCallbackImage, content: Uint8Array) {
    handlePhotoTaken(imageData, content);
  }

  function handleFaceComplete(imageData: FaceOnCompleteCallbackImage, content: Uint8Array) {
    handlePhotoTaken(imageData, content);
  }

  function handlePalmComplete(imageData: PalmOnCompleteCallbackImage, content: Uint8Array) {
    handlePhotoTaken(imageData, content);
  }

  function handleMagnifEyeComplete(imageData: MagnifEyeLivenessOnCompleteCallbackImage, content: Uint8Array) {
    handlePhotoTaken(imageData, content);
  }

  function handleSmileComplete(imageData: SmileLivenessOnCompleteCallbackImages, content: Uint8Array) {
    const { smilePhaseImageWithMetadata } = imageData;

    handlePhotoTaken(smilePhaseImageWithMetadata, content);
  }

  function handleMultiRangeComplete(imageData: MultiRangeLivenessOnCompleteCallbackImage, content: Uint8Array) {
    handlePhotoTaken(imageData.imageWithMetadata, content);
  }

  const handleError = useCallback((error: Error) => {
    // eslint-disable-next-line no-alert
    alert(error);
  }, []);

  function handleBackClick() {
    setPhotoUrl(undefined);
    setStep(Step.SELECT_COMPONENT);
  }

  function renderStep(currentStep: Step) {
    switch (currentStep) {
      case Step.DOCUMENT_CAPTURE:
        return (
          <DocumentAutoCapture
            onBackClick={handleBackClick}
            onError={handleError}
            onComplete={handleDocumentComplete}
          />
        );
      case Step.FACE_CAPTURE:
        return <FaceAutoCapture onBackClick={handleBackClick} onError={handleError} onComplete={handleFaceComplete} />;
      case Step.PALM_CAPTURE:
        return <PalmCapture onBackClick={handleBackClick} onError={handleError} onComplete={handlePalmComplete} />;
      case Step.MAGNIFEYE_LIVENESS:
        return (
          <MagnifEyeLiveness onBackClick={handleBackClick} onComplete={handleMagnifEyeComplete} onError={handleError} />
        );
      case Step.SMILE_LIVENESS:
        return <SmileLiveness onBackClick={handleBackClick} onComplete={handleSmileComplete} onError={handleError} />;
      case Step.MULTI_RANGE_LIVENESS:
        return (
          <MultiRangeLiveness
            onBackClick={handleBackClick}
            onComplete={handleMultiRangeComplete}
            onError={handleError}
          />
        );
      default:
        return <ComponentSelect setStep={setStep} />;
    }
  }

  return (
    <div className={styles.app}>
      <h1>DOT Web Components Integration</h1>
      {renderStep(step)}
      {photoUrl && <PhotoResult photoUrl={photoUrl} />}
    </div>
  );
}

export default App;

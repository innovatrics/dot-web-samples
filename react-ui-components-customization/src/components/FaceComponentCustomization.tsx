import type { FaceOnCompleteCallbackImage } from "@innovatrics/dot-face-auto-capture";

import {
  ControlEventInstruction,
  dispatchControlEvent,
  FaceCustomEvent,
} from "@innovatrics/dot-face-auto-capture/events";
import { useState } from "react";

import FaceCamera from "./non-ui/FaceCamera";
import { FaceUi } from "./ui/ui";
import componentWrapperStyles from "../styles/component-wrapper.module.css";

interface Props {
  onError: (error: Error) => void;
  onPhotoTaken: (
    imageData: FaceOnCompleteCallbackImage,
    content: Uint8Array
  ) => void;
}

export function FaceComponentCustomization({ onError, onPhotoTaken }: Props) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  async function handlePhotoTaken(
    imageData: FaceOnCompleteCallbackImage,
    content: Uint8Array
  ) {
    setIsButtonDisabled(false);
    onPhotoTaken(imageData, content);
  }

  function handleContinueDetection() {
    dispatchControlEvent(
      FaceCustomEvent.CONTROL,
      ControlEventInstruction.CONTINUE_DETECTION
    );

    setIsButtonDisabled(true);
  }

  return (
    <>
      <button disabled={isButtonDisabled} onClick={handleContinueDetection}>
        Continue detection
      </button>
      <div className={componentWrapperStyles.componentWrapper}>
        <FaceUi />
        <FaceCamera
          camera={{ facingMode: "user" }}
          onComplete={handlePhotoTaken}
          onError={onError}
        />
      </div>
    </>
  );
}

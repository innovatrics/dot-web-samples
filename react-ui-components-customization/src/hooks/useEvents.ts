import type { AutoCaptureError } from "@innovatrics/dot-face-auto-capture";
import type {
  AppState,
  CameraPropsChangeEvent,
  CameraStateChangeEvent,
  FaceInstructionChangeEvent,
  FaceInstructionCode,
  Resolution,
  VideoElementSizeChangeEvent,
} from "@innovatrics/dot-face-auto-capture/events";
import {
  AppStateValues,
  FaceCustomEvent,
  FaceInstructionCodeValues,
} from "@innovatrics/dot-face-auto-capture/events";
import { useState, useCallback } from "react";
import { useEventListener } from "./useEventListener";

export function useEvents() {
  const [cameraResolution, setCameraResolution] = useState<
    Resolution | undefined
  >();
  const [isMirroring, setIsMirroring] = useState(false);
  const [appState, setAppState] = useState<AppState | undefined>(
    AppStateValues.LOADING
  );
  const [error, setError] = useState<AutoCaptureError | undefined>();
  const [videoElementSize, setVideoElementSize] = useState<
    DOMRect | undefined
  >();
  const [instruction, setInstruction] = useState<{
    code?: FaceInstructionCode;
  }>({ code: FaceInstructionCodeValues.FACE_NOT_PRESENT });

  const handleCameraPropsChange = useCallback(
    (event: CameraPropsChangeEvent) => {
      setCameraResolution(event?.detail?.cameraResolution);

      const shouldMirror = event?.detail?.isMirroring;

      if (shouldMirror !== undefined) {
        setIsMirroring(shouldMirror);
      }
    },
    [setCameraResolution]
  );

  useEventListener(
    FaceCustomEvent.CAMERA_PROPS_CHANGED,
    handleCameraPropsChange
  );

  const handleInstructionChange = useCallback(
    (event: FaceInstructionChangeEvent) => {
      setInstruction({ code: event?.detail?.instructionCode });
    },
    [setInstruction]
  );

  useEventListener(
    FaceCustomEvent.INSTRUCTION_CHANGED,
    handleInstructionChange
  );

  const handleStateChange = useCallback(
    (event: CameraStateChangeEvent) => {
      setAppState(event.detail?.appState);
      setError(event?.detail?.error);
    },
    [setAppState, setError]
  );

  useEventListener(FaceCustomEvent.STATE_CHANGED, handleStateChange);

  const handleVideoElementSize = useCallback(
    (event: VideoElementSizeChangeEvent) => {
      setVideoElementSize(event?.detail?.size);
    },
    [setVideoElementSize]
  );

  useEventListener(FaceCustomEvent.VIDEO_ELEMENT_SIZE, handleVideoElementSize);

  return {
    cameraResolution,
    instruction,
    isMirroring,
    appState,
    error,
    videoElementSize,
  };
}

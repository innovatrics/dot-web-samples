import { useEvents } from "../../hooks/useEvents";
import {
  AppStateValues,
  FaceCustomEvent,
  FaceInstructionCodeValues,
} from "@innovatrics/dot-face-auto-capture/events";
import { FacePlaceholder } from "./placeholder/face-placeholder";
import { Instruction } from "./instruction";
import { CameraButtons } from "./camera-buttons";
import {
  calculateFontSize,
  getFacePlaceholderRectangleRelativeToCameraResolution,
} from "../../utils";
import { SuspenseOverlay } from "./overlay/suspense-overlay";
import { defaultFaceInstructions } from "../../constants";
import { StateOverlay } from "./overlay/state-overlay";

export function FaceUi() {
  const { cameraResolution, instruction, appState, error, videoElementSize } =
    useEvents();
  const isInCandidateSelection =
    instruction.code === FaceInstructionCodeValues.CANDIDATE_SELECTION;

  if (appState === AppStateValues.ERROR) {
    return error && <StateOverlay isCameraReady={false} text={error.message} />;
  }

  if (appState === AppStateValues.RUNNING && cameraResolution) {
    const placeholderRectangle =
      getFacePlaceholderRectangleRelativeToCameraResolution(cameraResolution);

    const fontSize = calculateFontSize(videoElementSize);

    return (
      <>
        <FacePlaceholder
          isInCandidateSelection={isInCandidateSelection}
          placeholderRectangle={placeholderRectangle}
        />
        {instruction.code && (
          <Instruction
            cssBottom={
              (placeholderRectangle.height + placeholderRectangle.shiftY) * 100
            }
            isInCandidateSelection={isInCandidateSelection}
            isPortrait={cameraResolution.width < cameraResolution.height}
            fontSize={fontSize}
          >
            {defaultFaceInstructions[instruction.code]}
          </Instruction>
        )}
        <CameraButtons
          customControlEvent={FaceCustomEvent.CONTROL}
          isSwitchCameraDisabled={isInCandidateSelection}
        />
      </>
    );
  }

  return <SuspenseOverlay state={appState} />;
}

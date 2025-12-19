import { FaceInstructionCodeValues } from "@innovatrics/dot-face-auto-capture/events";
import type { FaceInstructions } from "./types";

export const defaultFaceInstructions: FaceInstructions = {
  [FaceInstructionCodeValues.CANDIDATE_SELECTION]: "Stay still…",
  [FaceInstructionCodeValues.FACE_TOO_CLOSE]: "Move back",
  [FaceInstructionCodeValues.FACE_TOO_FAR]: "Move closer",
  [FaceInstructionCodeValues.FACE_CENTERING]: "Center your face",
  [FaceInstructionCodeValues.FACE_NOT_PRESENT]:
    "Position your face into the circle",
  [FaceInstructionCodeValues.SHARPNESS_TOO_LOW]: "Turn face against light",
  [FaceInstructionCodeValues.BRIGHTNESS_TOO_LOW]: "Turn face against light",
  [FaceInstructionCodeValues.BRIGHTNESS_TOO_HIGH]: "Less light needed",
  [FaceInstructionCodeValues.DEVICE_PITCHED]: "Hold your phone at eye level",
  [FaceInstructionCodeValues.LEFT_EYE_NOT_PRESENT]:
    "Position your face into the circle",
  [FaceInstructionCodeValues.RIGHT_EYE_NOT_PRESENT]:
    "Position your face into the circle",
  [FaceInstructionCodeValues.MOUTH_SCORE_TOO_HIGH]: "Keep neutral expression",
  [FaceInstructionCodeValues.MOUTH_SCORE_TOO_LOW]: "Smile",
  [FaceInstructionCodeValues.MOUTH_NOT_PRESENT]:
    "Position your face into the circle",
};

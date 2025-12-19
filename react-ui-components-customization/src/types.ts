import type {
  Crop,
  FaceInstructionCode,
} from "@innovatrics/dot-face-auto-capture/events";

export type StarburstPathParams = {
  centerX: number;
  centerY: number;
  innerRadius: number;
  outerRadius: number;
  points: number;
};

export type FaceInstructions = Record<FaceInstructionCode, string>;

export type WrapperProps = {
  isInCandidateSelection: boolean;
  placeholderRectangle: Crop;
};

import { HTMLAttributes } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "x-dot-document-auto-capture": HTMLAttributes<DocumentCameraProps>;
      "x-dot-face-auto-capture": HTMLAttributes<FaceCameraProps>;
    }
  }
}

export enum Step {
  SELECT_COMPONENT,
  DOCUMENT_CAPTURE,
  FACE_CAPTURE,
  IMAGE,
}

export enum DocumentValidationMode {
  STANDARD = "standard",
  STRICT = "strict",
}

export type DocumentPlaceholder =
  | "id-rectangle-corners-front"
  | "id-rectangle-dash-front"
  | "id-rectangle-dot-front"
  | "id-rectangle-solid-front"
  | "id-rounded-rectangle-photo-front"
  | "id-rounded-rectangle-corners-front"
  | "id-rounded-rectangle-dash-front"
  | "id-rounded-rectangle-dot-front"
  | "id-rounded-rectangle-solid-back"
  | "id-rounded-rectangle-solid-front"
  | "pass-rounded-rectangle-solid-back"
  | "pass-rounded-rectangle-solid-back-blank";

export type FacePlaceholder =
  | "circle-solid"
  | "ellipse-solid"
  | "man-solid"
  | "woman-solid"
  | "square-rounded-dash"
  | "square-rounded-solid"
  | "square-dash"
  | "square-solid";

export type FacingMode = "environment" | "user";

export type ImageType = "jpeg" | "png";

export type FaceInstructionCode =
  | "candidate_selection"
  | "face_too_close"
  | "face_too_far"
  | "face_centering"
  | "face_not_present"
  | "lighting";

export type DocumentInstructionCode =
  | "candidate_selection"
  | "document_centering"
  | "document_too_close"
  | "document_not_present"
  | "document_too_far"
  | "sharpness_too_low"
  | "brightness_too_low"
  | "brightness_too_high"
  | "hotspots_present"
  | "hold_still";

export type MediaType = "image/jpeg" | "image/png";

export type HTMLDocumentCaptureElement = HTMLElement & {
  cameraOptions: DocumentCameraProps;
};

export type HTMLFaceCaptureElement = HTMLElement & {
  cameraOptions: FaceCameraProps;
};

export type Resolution = {
  width: number;
  height: number;
};

export type CameraSettings = MediaTrackSettings & { deviceName?: string };

export type DocumentComponentData = {
  cameraSettings: CameraSettings;
  detection?: DetectedDocument;
  imageResolution: Resolution;
};

export type FaceComponentData = {
  cameraSettings: CameraSettings;
  detection?: DetectedFace;
  imageResolution: Resolution;
};

export type DocumentCallback = (
  image: Blob,
  data: DocumentComponentData
) => void;

export type FaceCallback = (image: Blob, data: FaceComponentData) => void;

export type CustomColors = {
  placeholderColor?: string;
  placeholderColorSuccess?: string;
  instructionColor?: string;
  instructionColorSuccess?: string;
  instructionTextColor?: string;
};

export type FaceInstructions = {
  candidate_selection?: string;
  face_too_close?: string;
  face_too_far?: string;
  face_centering?: string;
  face_not_present?: string;
  lighting?: string;
};

export type DocumentInstructions = {
  candidate_selection?: string;
  document_centering?: string;
  document_too_close?: string;
  document_not_present?: string;
  document_too_far?: string;
  sharpness_too_low?: string;
  brightness_too_low?: string;
  brightness_too_high?: string;
  hotspots_present?: string;
  hold_still?: string;
};

export type DocumentThresholds = {
  confidenceThreshold?: number;
  placeholderErrorScoreThreshold?: number;
  sharpnessThreshold?: number;
  brightnessLowThreshold?: number;
  brightnessHighThreshold?: number;
  hotspotsScoreThreshold?: number;
  outOfBoundsThreshold?: number;
  documentSmallThreshold?: number;
};

export type FaceThresholds = {
  faceConfidence?: number;
  optimalFaceSizeLimit?: number;
  optimalFaceSizeParam?: number;
  faceCenterLimit?: number;
};

export type BaseCameraProps = {
  imageType?: ImageType;
  cameraFacing?: FacingMode;
  onError?: (e: Error) => void;
  samWasmUrl?: string;
};

export type DocumentCameraProps = BaseCameraProps & {
  photoTakenCb: DocumentCallback;
  thresholds?: DocumentThresholds;
  validationMode?: DocumentValidationMode;
  uiCustomisation?: {
    placeholder?: {
      documentPlaceholder?: DocumentPlaceholder;
      customSVG?: string;
    };
    instructions?: DocumentInstructions;
    colors?: CustomColors;
  };
};

export type FaceCameraProps = BaseCameraProps & {
  photoTakenCb: FaceCallback;
  thresholds?: FaceThresholds;
  uiCustomisation?: {
    placeholder?: {
      facePlaceholder?: FacePlaceholder;
      customSVG?: string;
    };
    instructions?: FaceInstructions;
    colors?: CustomColors;
  };
};

export type Point = {
  x: number;
  y: number;
};

export type ImageParameters = {
  brightness: number;
  sharpness: number;
  hotspots: number;
};

export type ParsedDetectedDocument = ImageParameters & {
  confidence: number;
  topLeft: Point;
  topRight: Point;
  bottomRight: Point;
  bottomLeft: Point;
};

export type DetectedDocument = ParsedDetectedDocument &
  ImageParameters & {
    smallestEdge: number;
    placeholderFitError: number;
  };

export type DetectedFace = {
  confidence: number;
  topLeft: Point;
  bottomRight: Point;
  faceCenter: Point;
  faceSize: number;
};

export type DocumentDebugData = {
  document: DetectedDocument;
  fps: number;
  resolution: Resolution;
  detectionTime: number;
  instructionCode: DocumentInstructionCode;
};

export type FaceDebugData = {
  face: DetectedFace;
  fps: number;
  resolution: Resolution;
  detectionTime: number;
  instructionCode: FaceInstructionCode;
};

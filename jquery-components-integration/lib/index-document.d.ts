declare module 'common/utils/commonUtils' {
  import { CSSObject } from 'styled-components';
  export function isMobile(): boolean;
  export function isSafariVersion15(): boolean;
  export function sleep(time: number): Promise<void>;
  export function unwrap<T>(value: T | null | undefined): T;
  export const mobileButtonsCSS: CSSObject;
}
declare module 'common/types' {
  global {
    interface Window {
      DOT_DEBUG_MODE?: boolean;
    }
  }
  export type Resolution = {
    width: number;
    height: number;
  };
  export type CameraSettings = MediaTrackSettings & {
    deviceName?: string;
  };
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
  export type FacingMode = 'environment' | 'user';
  export type ImageType = 'jpeg' | 'png';
  export enum DocumentValidationMode {
    STANDARD = 'standard',
    STRICT = 'strict',
  }
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
  export type DocumentPlaceholder =
    | 'id-rectangle-corners-front'
    | 'id-rectangle-dash-front'
    | 'id-rectangle-dot-front'
    | 'id-rectangle-solid-front'
    | 'id-rounded-rectangle-photo-front'
    | 'id-rounded-rectangle-corners-front'
    | 'id-rounded-rectangle-dash-front'
    | 'id-rounded-rectangle-dot-front'
    | 'id-rounded-rectangle-solid-back'
    | 'id-rounded-rectangle-solid-front'
    | 'pass-rounded-rectangle-solid-back'
    | 'pass-rounded-rectangle-solid-back-blank';
  export type FacePlaceholder =
    | 'circle-solid'
    | 'ellipse-solid'
    | 'man-solid'
    | 'woman-solid'
    | 'square-rounded-dash'
    | 'square-rounded-solid'
    | 'square-dash'
    | 'square-solid';
  export type FaceInstructions = {
    candidate_selection?: string;
    face_too_close?: string;
    face_too_far?: string;
    face_centering?: string;
    face_not_present?: string;
    lighting?: string;
  };
  export type FaceInstructionCode =
    | 'candidate_selection'
    | 'face_too_close'
    | 'face_too_far'
    | 'face_centering'
    | 'face_not_present'
    | 'lighting';
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
  };
  export type DocumentInstructionCode =
    | 'candidate_selection'
    | 'document_centering'
    | 'document_too_close'
    | 'document_not_present'
    | 'document_too_far'
    | 'sharpness_too_low'
    | 'brightness_too_low'
    | 'brightness_too_high'
    | 'hotspots_present';
  export type DocumentThresholds = {
    confidenceThreshold?: number;
    placeholderErrorScoreThreshold?: number;
    sharpnessThreshold?: number;
    brightnessLowThreshold?: number;
    brightnessHighThreshold?: number;
    hotspotsScoreThreshold?: number;
    outOfBoundsThreshold?: number;
    sizeSmallThreshold?: number;
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
    detectionLayerVisible?: true;
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
  export type InitializedDocumentCameraProps = {
    imageType: ImageType;
    cameraFacing: FacingMode;
    onError?: (e: Error) => void;
    samWasmUrl?: string;
    photoTakenCb: DocumentCallback;
    thresholds: Required<DocumentThresholds>;
    validationMode: DocumentValidationMode;
    uiCustomisation: {
      placeholder: {
        documentPlaceholder: DocumentPlaceholder;
        customSVG?: string;
      };
      instructions: Required<DocumentInstructions>;
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
  export type InitializedFaceCameraProps = {
    imageType: ImageType;
    cameraFacing: FacingMode;
    onError?: (e: Error) => void;
    samWasmUrl?: string;
    photoTakenCb: FaceCallback;
    thresholds: Required<FaceThresholds>;
    uiCustomisation: {
      placeholder: {
        facePlaceholder: FacePlaceholder;
        customSVG?: string;
      };
      instructions: Required<FaceInstructions>;
      colors?: CustomColors;
    };
  };
  export type Point = {
    x: number;
    y: number;
  };
  export interface SamWasmModule extends WebAssembly.Module {
    getInfoString(): string;
    getImageParameters(
      width: number,
      height: number,
      data: Uint8ClampedArray
    ): ImageParameters;
    detectDocument(
      width: number,
      height: number,
      data: Uint8ClampedArray
    ): RawDetectedDocument;
    detectFace(
      width: number,
      height: number,
      data: Uint8ClampedArray
    ): RawDetectedFace;
    getResizedImageParameters(
      width: number,
      height: number,
      data: Uint8ClampedArray,
      newWidth: number,
      newHeight: number
    ): ImageParameters;
  }
  export type RawDetectedDocument = {
    score: number;
    x0: number;
    x1: number;
    x2: number;
    x3: number;
    y0: number;
    y1: number;
    y2: number;
    y3: number;
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
  export type RawDetectedFace = {
    probability: number;
    topLeftX: number;
    topLeftY: number;
    bottomRightX: number;
    bottomRightY: number;
  };
  export type DetectedFace = {
    confidence: number;
    topLeft: Point;
    bottomRight: Point;
    faceCenter: Point;
    faceSize: number;
  };
  export type PlaceholderPositions = {
    left: number;
    right: number;
    top: number;
    bottom: number;
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
  export type Crop = {
    shiftX: number;
    shiftY: number;
    width: number;
    height: number;
  };
  export type MediaType = 'image/jpeg' | 'image/png';
}
declare module 'common/constants' {
  export const FACE_CONFIDENCE_THRESHOLD = 0.12;
  export const OPTIMAL_FACE_SIZE_PARAM = 0.42;
  export const OPTIMAL_FACE_SIZE_LIMIT = 0.02;
  export const FACE_CENTER_LIMIT = 0.07;
  export const DOCUMENT_SIZE_RATIO = 1.5;
  export const PLACEHOLDER_TO_SHORTER_SIDE_RATIO = 0.85;
  export const FACE_PLACEHOLDER_TO_SHORTER_SIDE_RATIO = 0.75;
  export const FACE_DETECTION_TO_SHORTER_SIDE_RATIO = 0.85;
  export const MIN_DOCUMENT_IMAGE_WIDTH = 1000;
  export const SAM_IMAGE_WIDTH = 600;
  export const CONFIDENCE_THRESHOLD = 0.8;
  export const PLACEHOLDER_ERROR_SCORE_THRESHOLD = 0.035;
  export const SHARPNESS_THRESHOLD = 500;
  export const BRIGHTNESS_LOW_THRESHOLD = 250;
  export const BRIGHTNESS_HIGH_THRESHOLD = 900;
  export const HOTSPOTS_SCORE_THRESHOLD = 100;
  export const SIZE_SMALL_THRESHOLD = 0.43;
  export const OUT_OF_BOUNDS_THRESHOLD = 0.03;
  export const ASYMMETRIC_ABSOLUTE_VALUE_PENALTY_WEIGHT = 10;
  export const HORIZONTAL_PENALTY_WEIGHT = 0.5;
  export const ROTATION_PENALTY_WEIGHT = 2;
  export const COMPOUND_PENALTY_WEIGHT = 16;
}
declare module 'common/utils/imageHelpers' {
  import { Crop, MediaType } from 'common/types';
  export function canvasToBlob(
    canvas: HTMLCanvasElement,
    mediaType: MediaType,
    quality: number
  ): Promise<Blob>;
  export function blobToImage(blob: Blob): Promise<HTMLImageElement>;
  export function cropImage(
    image: HTMLCanvasElement,
    crop: Crop
  ): HTMLCanvasElement;
  export function resizeImage(
    image: HTMLCanvasElement,
    width?: number
  ): HTMLCanvasElement;
  export function getImageDataForSam(
    canvasImage: HTMLCanvasElement
  ): Uint8ClampedArray;
}
declare module 'common/components/buttons/InstructionButton' {
  import { h } from 'preact';
  export const CameraIconButtonSC: import('styled-components').StyledComponent<
    'button',
    any,
    {
      fontSize: number | undefined;
      isInCandidateSelection: boolean;
    },
    never
  >;
  interface InstructionButtonProps {
    onInstructionClick: () => void;
    instruction?: string;
    isDisabled?: boolean;
    fontSize?: number;
    isInCandidateSelection: boolean;
  }
  const InstructionButton: ({
    instruction,
    isDisabled,
    fontSize,
    isInCandidateSelection,
    onInstructionClick,
  }: InstructionButtonProps) => h.JSX.Element | null;
  export default InstructionButton;
}
declare module 'common/components/buttons/SwitchCameraButton' {
  import { h } from 'preact';
  const SwitchCameraButton: () => h.JSX.Element;
  export default SwitchCameraButton;
}
declare module 'common/components/buttons/MirrorButton' {
  import { h } from 'preact';
  const MirrorButton: () => h.JSX.Element;
  export default MirrorButton;
}
declare module 'document-auto-capture/src/utils/rectangles' {
  import { Resolution, Crop, Point, DetectedDocument } from 'common/types';
  type RectangleConvertFunctions = {
    toPlaceholderPercent: () => Point;
    toDetectionPercent: () => Point;
    toPlaceholderPixels: () => Point;
    toDetectionPixels: () => Point;
    toImagePixels: () => Point;
  };
  export function getDetectionRectangleWidth(camera: Resolution): number;
  export function getDetectionRectangle(camera: Resolution): Crop;
  export function getOutOfBoundsValidatorRectangle(
    camera: Resolution,
    outOfBoundsThreshold: number
  ): {
    shiftX: number;
    shiftY: number;
    width: number;
    height: number;
  };
  export function getPlaceholderRectangle(camera: Resolution): Crop;
  export function detectionPercentToImagePercent(
    camera: Resolution,
    detectionPercent: Point
  ): Point;
  export function detectionDocumentCornersToImagePercent(
    camera: Resolution,
    detectedDocument: DetectedDocument
  ): DetectedDocument;
  export function detectionDocumentCornersToDetectionPercent(
    camera: Resolution,
    detectedDocument: DetectedDocument
  ): DetectedDocument;
  export function imagePercentRectangleToDetectionPercent(
    camera: Resolution,
    rectangle: Crop
  ): Crop;
  function rectangles(
    camera: Resolution,
    imagePercent: Point
  ): RectangleConvertFunctions;
  export default rectangles;
}
declare module 'common/utils/formatDebug' {
  import { DetectedDocument, DetectedFace, Point } from 'common/types';
  export const threeDigitTrunc: (value: number) => number;
  export const pointThreeDigitTrunc: (point: Point) => Point;
  export const formatDocumentDebugData: (
    detectedDocument: DetectedDocument
  ) => DetectedDocument;
  export const formatFaceDebugData: (
    detectedFace: DetectedFace
  ) => DetectedFace;
}
declare module 'document-auto-capture/src/context/CameraOptionsProvider' {
  import { h, ComponentChildren } from 'preact';
  import {
    InitializedDocumentCameraProps,
    DocumentCameraProps,
  } from 'common/types';
  interface Props {
    children: ComponentChildren;
    cameraOptions: DocumentCameraProps;
  }
  interface CameraOptionsContextType {
    documentCameraOptions: InitializedDocumentCameraProps;
  }
  export const CameraOptionsContext: import('preact').Context<CameraOptionsContextType | null>;
  export const useCameraOptionsContext: () => CameraOptionsContextType;
  export const CameraOptionsProvider: ({
    children,
    cameraOptions,
  }: Props) => h.JSX.Element | null;
}
declare module 'document-auto-capture/src/components/DebugOverlay' {
  import { h } from 'preact';
  import { DocumentDebugData, Resolution } from 'common/types';
  interface DebugOverlayProps {
    debugData: DocumentDebugData;
    isImageMirror: boolean;
    cameraResolution: Resolution;
  }
  const DebugOverlay: ({
    debugData,
    isImageMirror,
    cameraResolution,
  }: DebugOverlayProps) => h.JSX.Element;
  export default DebugOverlay;
}
declare module 'common/utils/cameraHandler' {
  import { Resolution } from 'common/types';
  export class CameraHandler {
    videoRef: HTMLVideoElement;
    mediaStream: MediaStream | null;
    videoTrack: MediaStreamTrack | null;
    constructor(videoRef: HTMLVideoElement);
    static getDeviceList(): Promise<MediaDeviceInfo[]>;
    initWebcam(customVideoConstraints?: MediaTrackConstraints): Promise<void>;
    startWebcam(
      streamConstraints?: MediaStreamConstraints
    ): Promise<MediaStreamTrack>;
    checkVideoTrackSettings(): void;
    private getBestCamera;
    private getConstraints;
    takePhoto(): HTMLCanvasElement;
    getCameraResolution(): Resolution;
    getCameraSettings(): MediaTrackSettings;
    getDeviceName(): Promise<string | undefined>;
    applyNewConstraints(constraints: MediaTrackConstraints): Promise<void>;
    switchCamera(): Promise<void>;
    stopCamera(): void;
    checkIfStreamIsRunning(): boolean;
  }
}
declare module 'document-auto-capture/src/utils/documentDetector' {
  import { ParsedDetectedDocument, SamWasmModule } from 'common/types';
  class DocumentDetector {
    samWasmModule: SamWasmModule | undefined;
    private getOverriddenModules;
    initSamModule(samWasmUrl?: string): Promise<void>;
    private parseRawDocumentData;
    detectDocument(
      detectionImage: HTMLCanvasElement,
      placeholderImage: HTMLCanvasElement
    ): Promise<ParsedDetectedDocument>;
  }
  export const documentDetector: DocumentDetector;
}
declare module 'common/utils/mathHelpers' {
  import { Point } from 'common/types';
  export const calculateTwoPointsDistance: (
    point1: Point,
    point2: Point
  ) => number;
  export const isPointInCircle: (
    point: Point,
    circleCenter: Point,
    radius: number
  ) => boolean;
}
declare module 'document-auto-capture/src/utils/validators' {
  import {
    DetectedDocument,
    ParsedDetectedDocument,
    Resolution,
  } from 'common/types';
  export const addCustomValidationValues: (
    document: ParsedDetectedDocument,
    cameraResolution: Resolution,
    detectionImage: Resolution
  ) => DetectedDocument;
  export const getDocumentSmallestEdge: (
    document: ParsedDetectedDocument,
    detectionImage: Resolution
  ) => number;
  export const isNotOutOfBoundsValidator: (
    OUT_OF_BOUNDS_THRESHOLD: number,
    document: DetectedDocument
  ) => boolean;
}
declare module 'document-auto-capture/src/utils/Controller' {
  import {
    DocumentThresholds,
    DetectedDocument,
    DocumentInstructionCode,
    DocumentValidationMode,
  } from 'common/types';
  type DocumentChecks = {
    isPresent: boolean;
    doesFit: boolean;
    isNotOutOfBounds: boolean;
    isNotSmall: boolean;
    isSharp: boolean;
    isNotDim: boolean;
    isNotBright: boolean;
    noHotspots: boolean;
  };
  type ProcessedImage = {
    instructionCode: DocumentInstructionCode;
    isInCandidateSelection: boolean;
    detectedDocument: DetectedDocument;
  };
  type BestImageCandidate = {
    image: HTMLCanvasElement;
    detection: DetectedDocument;
  };
  type LastImage = {
    isValid: boolean;
    instructionCode: DocumentInstructionCode;
  };
  class DocumentController {
    isInCandidateSelection: boolean;
    lastImage: LastImage | null;
    bestImage: BestImageCandidate | null;
    validationMode: DocumentValidationMode;
    CONFIDENCE_THRESHOLD: number;
    PLACEHOLDER_ERROR_SCORE_THRESHOLD: number;
    SHARPNESS_THRESHOLD: number;
    BRIGHTNESS_LOW_THRESHOLD: number;
    BRIGHTNESS_HIGH_THRESHOLD: number;
    HOTSPOTS_SCORE_THRESHOLD: number;
    OUT_OF_BOUNDS_THRESHOLD: number;
    SIZE_SMALL_THRESHOLD: number;
    constructor(
      customThresholds: Required<DocumentThresholds>,
      validationMode: DocumentValidationMode
    );
    initDocumentDetector(samWasmUrl?: string): Promise<void>;
    getBestImage(): BestImageCandidate | null;
    isNewImageBetter(
      oldDocument: DetectedDocument,
      newDocument: DetectedDocument
    ): boolean;
    validateDetectedDocument(document: DetectedDocument): DocumentChecks;
    checkIfDetectedDocumentIsValid(checks: DocumentChecks): boolean;
    getInstructionCode: (
      checks: DocumentChecks,
      isDetectedDocumentValid: boolean
    ) => DocumentInstructionCode;
    processImage(takenPhoto: HTMLCanvasElement): Promise<ProcessedImage>;
  }
  export default DocumentController;
}
declare module 'common/components/CameraSC' {
  import { Crop } from 'common/types';
  export const RootSC: import('styled-components').StyledComponent<
    'div',
    any,
    {},
    never
  >;
  export const CameraWrapperSC: import('styled-components').StyledComponent<
    'div',
    any,
    {
      wrapperWidth: number | undefined;
      wrapperHeight: number | undefined;
    },
    never
  >;
  export const VideoSC: import('styled-components').StyledComponent<
    'video',
    any,
    {
      isImageMirror: boolean;
    },
    never
  >;
  export const PlaceholderWrapperSC: import('styled-components').StyledComponent<
    'div',
    any,
    {
      isInCandidateSelection: boolean;
      placeholderRect: Crop;
    },
    never
  >;
  export const CameraHandlerSC: import('styled-components').StyledComponent<
    'div',
    any,
    {},
    never
  >;
  export const CameraButtonSC: import('styled-components').StyledComponent<
    'button',
    any,
    {
      marginRight?: boolean | undefined;
    },
    never
  >;
  export const ButtonWrapperSC: import('styled-components').StyledComponent<
    'div',
    any,
    {
      cssTop?: number | undefined;
      cssBottom?: number | undefined;
      isPortrait?: boolean | undefined;
    },
    never
  >;
}
declare module 'common/components/customHooks' {
  import { Ref } from 'preact/hooks';
  import { CameraHandler } from 'common/utils/cameraHandler';
  import { Resolution } from 'common/types';
  export function useResizeHandler(
    cameraResolution: Resolution | null,
    rootRef: Ref<HTMLDivElement | null>
  ): Resolution | null;
  export function useShowCameraSwitcher(
    cameraHandler: CameraHandler | null
  ): boolean;
}
declare module 'document-auto-capture/src/components/placeholders/IdRectangleCornersFront' {
  import { h } from 'preact';
  const IdRectangleCornersFront: () => h.JSX.Element;
  export default IdRectangleCornersFront;
}
declare module 'document-auto-capture/src/components/placeholders/IdRectangleDashFront' {
  import { h } from 'preact';
  const IdRectangleDashFront: () => h.JSX.Element;
  export default IdRectangleDashFront;
}
declare module 'document-auto-capture/src/components/placeholders/IdRectangleDotFront' {
  import { h } from 'preact';
  const IdRectangleDotFront: () => h.JSX.Element;
  export default IdRectangleDotFront;
}
declare module 'document-auto-capture/src/components/placeholders/IdRectangleSolidFront' {
  import { h } from 'preact';
  const IdRectangleSolidFront: () => h.JSX.Element;
  export default IdRectangleSolidFront;
}
declare module 'document-auto-capture/src/components/placeholders/IdRoundedRectanglePhotoFront' {
  import { h } from 'preact';
  const IdRoundedRectanglePhotoFront: () => h.JSX.Element;
  export default IdRoundedRectanglePhotoFront;
}
declare module 'document-auto-capture/src/components/placeholders/IdRoundedRectangleCornersFront' {
  import { h } from 'preact';
  const IdRoundedRectangleCornersFront: () => h.JSX.Element;
  export default IdRoundedRectangleCornersFront;
}
declare module 'document-auto-capture/src/components/placeholders/IdRoundedRectangleDashFront' {
  import { h } from 'preact';
  const IdRoundedRectangleDashFront: () => h.JSX.Element;
  export default IdRoundedRectangleDashFront;
}
declare module 'document-auto-capture/src/components/placeholders/IdRoundedRectangleDotFront' {
  import { h } from 'preact';
  const IdRoundedRectangleDotFront: () => h.JSX.Element;
  export default IdRoundedRectangleDotFront;
}
declare module 'document-auto-capture/src/components/placeholders/IdRoundedRectangleSolidBack' {
  import { h } from 'preact';
  const IdRoundedRectangleSolidBack: () => h.JSX.Element;
  export default IdRoundedRectangleSolidBack;
}
declare module 'document-auto-capture/src/components/placeholders/IdRoundedRectangleSolidFront' {
  import { h } from 'preact';
  const IdRoundedRectangleSolidFront: () => h.JSX.Element;
  export default IdRoundedRectangleSolidFront;
}
declare module 'document-auto-capture/src/components/placeholders/PassRoundedRectangleSolidBack' {
  import { h } from 'preact';
  const PassRoundedRectangleSolidBack: () => h.JSX.Element;
  export default PassRoundedRectangleSolidBack;
}
declare module 'document-auto-capture/src/components/placeholders/PassRoundedRectangleSolidBackBlank' {
  import { h } from 'preact';
  const PassRoundedRectangleSolidBack: () => h.JSX.Element;
  export default PassRoundedRectangleSolidBack;
}
declare module 'document-auto-capture/src/components/Placeholder' {
  import { h } from 'preact';
  const Placeholder: () => h.JSX.Element;
  export default Placeholder;
}
declare module 'document-auto-capture/src/components/Camera' {
  import { h } from 'preact';
  const Camera: () => h.JSX.Element;
  export default Camera;
}
declare module 'common/theme' {
  import { CSSObject } from 'styled-components';
  import { CustomColors } from 'common/types';
  export const space: string[];
  const theme: {
    colors: {
      primary: string;
      primaryHover: string;
      primaryActive: string;
      secondary: string;
      secondaryHover: string;
      secondaryActive: string;
      action: string;
      actionHover: string;
      actionActive: string;
      error: string;
      warning: string;
      success: string;
      actionOnPrimary: string;
      primarySecondary: string;
      white: string;
      white0: string;
      white15: string;
      white25: string;
      white30: string;
      white50: string;
      placeholderColor: string;
      placeholderColorSuccess: string;
      instructionColor: string;
      instructionColorSuccess: string;
      instructionTextColor: string;
    };
    colorStyles: {
      hover: {
        cyan: string;
      };
    };
    lineHeights: {
      base: number;
    };
    fontSizes: {
      base: number;
    };
    textStyles: Record<string, CSSObject>;
    transitions: {
      buttons: string;
    };
    space: string[];
    breakpoints: string[];
  };
  export type Theme = typeof theme;
  export const customTheme: (customColors?: CustomColors | undefined) => Theme;
}
declare module 'document-auto-capture/src/components/wrappers/Root' {
  import { h } from 'preact';
  const Root: () => h.JSX.Element;
  export default Root;
}
declare module 'document-auto-capture/src/components/wrappers/DocumentInitialization' {
  import { h } from 'preact';
  import { DocumentCameraProps } from 'common/types';
  import '../../../../common/styles/global.css';
  interface DocumentInitializationProps {
    cameraOptions: DocumentCameraProps;
  }
  const DocumentInitialization: ({
    cameraOptions,
  }: DocumentInitializationProps) => h.JSX.Element | null;
  export default DocumentInitialization;
}
declare module 'document-auto-capture/src/main' {}
declare module 'document-auto-capture/src/test/utils/controller.test' {}
declare module 'document-auto-capture/src/test/utils/rectangles.test' {}
declare module 'document-auto-capture/src/test/utils/validators.test' {}

declare module "common/utils/commonUtils" {
    import { CSSObject } from 'styled-components';
    export function isMobile(): boolean;
    export function isSafariVersion15(): boolean;
    export function sleep(time: number): Promise<void>;
    export function unwrap<T>(value: T | null | undefined): T;
    export const mobileButtonsCSS: CSSObject;
}
declare module "common/types" {
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
        STANDARD = "standard",
        STRICT = "strict"
    }
    export type DocumentCallback = (image: Blob, data: DocumentComponentData) => void;
    export type FaceCallback = (image: Blob, data: FaceComponentData) => void;
    export type CustomColors = {
        placeholderColor?: string;
        placeholderColorSuccess?: string;
        instructionColor?: string;
        instructionColorSuccess?: string;
        instructionTextColor?: string;
    };
    export type DocumentPlaceholder = 'id-rectangle-corners-front' | 'id-rectangle-dash-front' | 'id-rectangle-dot-front' | 'id-rectangle-solid-front' | 'id-rounded-rectangle-photo-front' | 'id-rounded-rectangle-corners-front' | 'id-rounded-rectangle-dash-front' | 'id-rounded-rectangle-dot-front' | 'id-rounded-rectangle-solid-back' | 'id-rounded-rectangle-solid-front' | 'pass-rounded-rectangle-solid-back' | 'pass-rounded-rectangle-solid-back-blank';
    export type FacePlaceholder = 'circle-solid' | 'ellipse-solid' | 'man-solid' | 'woman-solid' | 'square-rounded-dash' | 'square-rounded-solid' | 'square-dash' | 'square-solid';
    export type FaceInstructions = {
        candidate_selection?: string;
        face_too_close?: string;
        face_too_far?: string;
        face_centering?: string;
        face_not_present?: string;
        lighting?: string;
    };
    export type FaceInstructionCode = 'candidate_selection' | 'face_too_close' | 'face_too_far' | 'face_centering' | 'face_not_present' | 'lighting';
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
    export type DocumentInstructionCode = 'candidate_selection' | 'document_centering' | 'document_too_close' | 'document_not_present' | 'document_too_far' | 'sharpness_too_low' | 'brightness_too_low' | 'brightness_too_high' | 'hotspots_present';
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
        getImageParameters(width: number, height: number, data: Uint8ClampedArray): ImageParameters;
        detectDocument(width: number, height: number, data: Uint8ClampedArray): RawDetectedDocument;
        detectFace(width: number, height: number, data: Uint8ClampedArray): RawDetectedFace;
        getResizedImageParameters(width: number, height: number, data: Uint8ClampedArray, newWidth: number, newHeight: number): ImageParameters;
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
    export type DetectedDocument = ParsedDetectedDocument & ImageParameters & {
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
declare module "common/constants" {
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
declare module "common/utils/imageHelpers" {
    import { Crop, MediaType } from "common/types";
    export function canvasToBlob(canvas: HTMLCanvasElement, mediaType: MediaType, quality: number): Promise<Blob>;
    export function blobToImage(blob: Blob): Promise<HTMLImageElement>;
    export function cropImage(image: HTMLCanvasElement, crop: Crop): HTMLCanvasElement;
    export function resizeImage(image: HTMLCanvasElement, width?: number): HTMLCanvasElement;
    export function getImageDataForSam(canvasImage: HTMLCanvasElement): Uint8ClampedArray;
}
declare module "common/components/buttons/InstructionButton" {
    import { h } from 'preact';
    export const CameraIconButtonSC: import("styled-components").StyledComponent<"button", any, {
        fontSize: number | undefined;
        isInCandidateSelection: boolean;
    }, never>;
    interface InstructionButtonProps {
        onInstructionClick: () => void;
        instruction?: string;
        isDisabled?: boolean;
        fontSize?: number;
        isInCandidateSelection: boolean;
    }
    const InstructionButton: ({ instruction, isDisabled, fontSize, isInCandidateSelection, onInstructionClick, }: InstructionButtonProps) => h.JSX.Element | null;
    export default InstructionButton;
}
declare module "common/components/buttons/SwitchCameraButton" {
    import { h } from 'preact';
    const SwitchCameraButton: () => h.JSX.Element;
    export default SwitchCameraButton;
}
declare module "common/components/buttons/MirrorButton" {
    import { h } from 'preact';
    const MirrorButton: () => h.JSX.Element;
    export default MirrorButton;
}
declare module "face-auto-capture/src/utils/rectangles" {
    import { Crop, DetectedFace, Resolution } from "common/types";
    export function getPlaceholderRectangle(camera: Resolution): Crop;
    export function getDetectionRectangle(camera: Resolution): Crop;
    export function detectionCoordinatesToImageCoordinates(camera: Resolution, detectedFace: DetectedFace): DetectedFace;
}
declare module "face-auto-capture/src/utils/faceDetector" {
    import { DetectedFace, SamWasmModule } from "common/types";
    class FaceDetector {
        samWasmModule: SamWasmModule | undefined;
        private getOverriddenModules;
        initSamModule(samWasmUrl?: string): Promise<void>;
        private parseRawFaceData;
        detectFace(detectionImage: HTMLCanvasElement): Promise<DetectedFace>;
    }
    export const faceDetector: FaceDetector;
}
declare module "common/utils/mathHelpers" {
    import { Point } from "common/types";
    export const calculateTwoPointsDistance: (point1: Point, point2: Point) => number;
    export const isPointInCircle: (point: Point, circleCenter: Point, radius: number) => boolean;
}
declare module "face-auto-capture/src/utils/validators" {
    import { DetectedFace, Resolution } from "common/types";
    import FaceController from "face-auto-capture/src/utils/Controller";
    export const faceNotDetectedValidator: (faceController: FaceController, detectedFace: DetectedFace) => boolean;
    export const faceSmallValidator: (faceController: FaceController, detectedFace: DetectedFace, cameraResolution: Resolution) => boolean;
    export const faceLargeValidator: (faceController: FaceController, detectedFace: DetectedFace, cameraResolution: Resolution) => boolean;
    export const faceNotCenteredValidator: (faceController: FaceController, detectedFace: DetectedFace, cameraResolution: Resolution) => boolean;
}
declare module "common/utils/formatDebug" {
    import { DetectedDocument, DetectedFace, Point } from "common/types";
    export const threeDigitTrunc: (value: number) => number;
    export const pointThreeDigitTrunc: (point: Point) => Point;
    export const formatDocumentDebugData: (detectedDocument: DetectedDocument) => DetectedDocument;
    export const formatFaceDebugData: (detectedFace: DetectedFace) => DetectedFace;
}
declare module "face-auto-capture/src/utils/Controller" {
    import { DetectedFace, FaceThresholds, FaceInstructionCode, Resolution } from "common/types";
    type FaceChecks = {
        isPresent: boolean;
        isNotSmall: boolean;
        isNotLarge: boolean;
        isCentered: boolean;
    };
    type ProcessedImage = {
        instructionCode: FaceInstructionCode;
        isInCandidateSelection: boolean;
        detectedFace: DetectedFace;
    };
    type BestImageCandidate = {
        image: HTMLCanvasElement;
        detection: DetectedFace;
    };
    type LastImage = {
        isValid: boolean;
        instructionCode: FaceInstructionCode;
    };
    class FaceController {
        isInCandidateSelection: boolean;
        lastImage: LastImage | null;
        bestImage: BestImageCandidate | null;
        FACE_CONFIDENCE_THRESHOLD: number;
        OPTIMAL_FACE_SIZE_LIMIT: number;
        OPTIMAL_FACE_SIZE_PARAM: number;
        FACE_CENTER_LIMIT: number;
        constructor(customThresholds: Required<FaceThresholds>);
        initFaceDetector(samWasmUrl?: string): Promise<void>;
        getBestImage(): BestImageCandidate | null;
        isNewImageBetter: (oldFace: DetectedFace, newFace: DetectedFace, camera: Resolution) => boolean;
        validateDetectedFace: (detectedFace: DetectedFace, cameraResolution: Resolution) => FaceChecks;
        checkIfDetectedFaceIsValid(checks: FaceChecks): boolean;
        getInstructionCode: (checks: FaceChecks, isDetectedFaceValid: boolean) => FaceInstructionCode;
        processImage(takenPhoto: HTMLCanvasElement): Promise<ProcessedImage>;
    }
    export default FaceController;
}
declare module "common/utils/cameraHandler" {
    import { Resolution } from "common/types";
    export class CameraHandler {
        videoRef: HTMLVideoElement;
        mediaStream: MediaStream | null;
        videoTrack: MediaStreamTrack | null;
        constructor(videoRef: HTMLVideoElement);
        static getDeviceList(): Promise<MediaDeviceInfo[]>;
        initWebcam(customVideoConstraints?: MediaTrackConstraints): Promise<void>;
        startWebcam(streamConstraints?: MediaStreamConstraints): Promise<MediaStreamTrack>;
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
declare module "face-auto-capture/src/context/CameraOptionsProvider" {
    import { h, ComponentChildren } from 'preact';
    import { FaceCameraProps, InitializedFaceCameraProps } from "common/types";
    interface Props {
        children: ComponentChildren;
        cameraOptions: FaceCameraProps;
    }
    interface CameraOptionsContextType {
        faceCameraOptions: InitializedFaceCameraProps;
    }
    export const CameraOptionsContext: import("preact").Context<CameraOptionsContextType | null>;
    export const useCameraOptionsContext: () => CameraOptionsContextType;
    export const CameraOptionsProvider: ({ children, cameraOptions }: Props) => h.JSX.Element | null;
}
declare module "face-auto-capture/src/components/DebugOverlay" {
    import { h } from 'preact';
    import { FaceDebugData, Resolution } from "common/types";
    interface DebugOverlayProps {
        debugData: FaceDebugData;
        isImageMirror: boolean;
        cameraResolution: Resolution;
    }
    const DebugOverlay: ({ debugData, isImageMirror, cameraResolution }: DebugOverlayProps) => h.JSX.Element;
    export default DebugOverlay;
}
declare module "common/components/CameraSC" {
    import { Crop } from "common/types";
    export const RootSC: import("styled-components").StyledComponent<"div", any, {}, never>;
    export const CameraWrapperSC: import("styled-components").StyledComponent<"div", any, {
        wrapperWidth: number | undefined;
        wrapperHeight: number | undefined;
    }, never>;
    export const VideoSC: import("styled-components").StyledComponent<"video", any, {
        isImageMirror: boolean;
    }, never>;
    export const PlaceholderWrapperSC: import("styled-components").StyledComponent<"div", any, {
        isInCandidateSelection: boolean;
        placeholderRect: Crop;
    }, never>;
    export const CameraHandlerSC: import("styled-components").StyledComponent<"div", any, {}, never>;
    export const CameraButtonSC: import("styled-components").StyledComponent<"button", any, {
        marginRight?: boolean | undefined;
    }, never>;
    export const ButtonWrapperSC: import("styled-components").StyledComponent<"div", any, {
        cssTop?: number | undefined;
        cssBottom?: number | undefined;
        isPortrait?: boolean | undefined;
    }, never>;
}
declare module "common/components/customHooks" {
    import { Ref } from 'preact/hooks';
    import { CameraHandler } from "common/utils/cameraHandler";
    import { Resolution } from "common/types";
    export function useResizeHandler(cameraResolution: Resolution | null, rootRef: Ref<HTMLDivElement | null>): Resolution | null;
    export function useShowCameraSwitcher(cameraHandler: CameraHandler | null): boolean;
}
declare module "face-auto-capture/src/components/placeholders/CircleSolid" {
    import { h } from 'preact';
    const CircleSolid: () => h.JSX.Element;
    export default CircleSolid;
}
declare module "face-auto-capture/src/components/placeholders/EllipseSolid" {
    import { h } from 'preact';
    const EllipseSolid: () => h.JSX.Element;
    export default EllipseSolid;
}
declare module "face-auto-capture/src/components/placeholders/ManSolid" {
    import { h } from 'preact';
    const ManSolid: () => h.JSX.Element;
    export default ManSolid;
}
declare module "face-auto-capture/src/components/placeholders/WomanSolid" {
    import { h } from 'preact';
    const SquareSolid: () => h.JSX.Element;
    export default SquareSolid;
}
declare module "face-auto-capture/src/components/placeholders/SquareDash" {
    import { h } from 'preact';
    const SquareDash: () => h.JSX.Element;
    export default SquareDash;
}
declare module "face-auto-capture/src/components/placeholders/SquareSolid" {
    import { h } from 'preact';
    const SquareSolid: () => h.JSX.Element;
    export default SquareSolid;
}
declare module "face-auto-capture/src/components/placeholders/SquareRoundedDash" {
    import { h } from 'preact';
    const SquareRoundedDash: () => h.JSX.Element;
    export default SquareRoundedDash;
}
declare module "face-auto-capture/src/components/placeholders/SquareRoundedSolid" {
    import { h } from 'preact';
    const SquareRoundedSolid: () => h.JSX.Element;
    export default SquareRoundedSolid;
}
declare module "face-auto-capture/src/components/Placeholder" {
    import { h } from 'preact';
    const Placeholder: () => h.JSX.Element;
    export default Placeholder;
}
declare module "face-auto-capture/src/components/Camera" {
    import { h } from 'preact';
    const Camera: () => h.JSX.Element;
    export default Camera;
}
declare module "common/theme" {
    import { CSSObject } from 'styled-components';
    import { CustomColors } from "common/types";
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
declare module "face-auto-capture/src/components/wrappers/Root" {
    import { h } from 'preact';
    const Root: () => h.JSX.Element;
    export default Root;
}
declare module "face-auto-capture/src/components/wrappers/FaceInitialization" {
    import { h } from 'preact';
    import { FaceCameraProps } from "common/types";
    import '../../../../common/styles/global.css';
    interface FaceInitializationProps {
        cameraOptions: FaceCameraProps;
    }
    const FaceInitialization: ({ cameraOptions }: FaceInitializationProps) => h.JSX.Element | null;
    export default FaceInitialization;
}
declare module "face-auto-capture/src/main" { }
declare module "face-auto-capture/src/test/utils/controller.test" { }
declare module "face-auto-capture/src/test/utils/rectangles.test" { }
declare module "face-auto-capture/src/test/utils/validators.test" { }

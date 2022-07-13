/// <reference types="react" />
/// <amd-module name="@innovatrics/auto-capture" />
declare module "@innovatrics/auto-capture" {
    global {
        interface Window {
            DOT_DEBUG_MODE?: boolean;
        }
        namespace JSX {
            interface IntrinsicElements {
                'x-dot-document-auto-capture': React.HTMLAttributes<DocumentCameraProps>;
                'x-dot-face-auto-capture': React.HTMLAttributes<FaceCameraProps>;
            }
        }
    }
    module 'preact/src/jsx' {
        namespace JSXInternal {
            interface IntrinsicElements {
                'x-dot-face-auto-capture': React.HTMLAttributes<FaceCameraProps>;
                'x-dot-document-auto-capture': React.HTMLAttributes<DocumentCameraProps>;
            }
        }
    }
    type DeepRequired<T> = {
        [K in keyof T]: Required<DeepRequired<T[K]>>;
    };
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
    export type CameraSettings = MediaTrackSettings & {
        deviceName?: string;
    };
    export type DocumentComponentData = {
        cameraSettings: CameraSettings;
        detection?: DetectedDocument;
        imageResolution: Resolution;
        record?: DetectedDocument[];
    };
    export type FaceComponentData = {
        cameraSettings: CameraSettings;
        detection?: DetectedFace;
        imageResolution: Resolution;
        record?: DetectedFace[];
    };
    export type FacingMode = 'environment' | 'user';
    export type ImageType = 'jpeg' | 'png';
    export type DocumentValidationMode = 'standard' | 'strict';
    export type DocumentCallback = (image: Blob, data: DocumentComponentData) => void;
    export type FaceCallback = (image: Blob, data: FaceComponentData) => void;
    export type CustomColors = {
        placeholderColor?: string;
        placeholderColorSuccess?: string;
        instructionColor?: string;
        instructionColorSuccess?: string;
        instructionTextColor?: string;
    };
    export type AppStateInstruction = {
        text?: string;
        visible?: boolean;
    };
    export type AppStateInstructions = {
        loading?: AppStateInstruction;
        waiting?: AppStateInstruction;
    };
    export type DocumentPlaceholder = 'id-rectangle-corners-front' | 'id-rectangle-dash-front' | 'id-rectangle-dot-front' | 'id-rectangle-solid-front' | 'id-rounded-rectangle-photo-front' | 'id-rounded-rectangle-corners-front' | 'id-rounded-rectangle-dash-front' | 'id-rounded-rectangle-dot-front' | 'id-rounded-rectangle-solid-back' | 'id-rounded-rectangle-solid-front' | 'pass-rounded-rectangle-solid-back' | 'pass-rounded-rectangle-solid-back-blank';
    export type FacePlaceholder = 'circle-solid' | 'ellipse-solid' | 'man-solid' | 'woman-solid' | 'square-rounded-dash' | 'square-rounded-solid' | 'square-dash' | 'square-solid';
    export type FaceInstructions = {
        candidate_selection?: string;
        face_too_close?: string;
        face_too_far?: string;
        face_centering?: string;
        face_not_present?: string;
        sharpness_too_low?: string;
        brightness_too_low?: string;
        brightness_too_high?: string;
        hotspots_medium_present?: string;
        hotspots_high_present?: string;
    };
    export type FaceInstructionCode = 'candidate_selection' | 'face_too_close' | 'face_too_far' | 'face_centering' | 'face_not_present' | 'sharpness_too_low' | 'brightness_too_low' | 'brightness_too_high' | 'hotspots_medium_present' | 'hotspots_high_present';
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
        minFaceSizeRatio?: number;
        maxFaceSizeRatio?: number;
        faceCenteringNarrowSide?: number;
        faceCenteringWideSide?: number;
        sharpnessThreshold?: number;
        brightnessLowThreshold?: number;
        brightnessHighThreshold?: number;
        hotspotsMediumThreshold?: number;
        hotspotsHighThreshold?: number;
    };
    export type BaseCameraProps = {
        imageType?: ImageType;
        cameraFacing?: FacingMode;
        onError: (e: Error) => void;
        samWasmUrl?: string;
    };
    export type DocumentCameraProps = BaseCameraProps & {
        photoTakenCb: DocumentCallback;
        thresholds?: DocumentThresholds;
        validationMode?: DocumentValidationMode;
        detectionLayerVisible?: boolean;
        uiCustomisation?: {
            placeholder?: {
                documentPlaceholder?: DocumentPlaceholder;
                customSVG?: string;
            };
            instructions?: DocumentInstructions;
            appStateInstructions?: AppStateInstructions;
            colors?: CustomColors;
        };
    };
    export type InitializedDocumentCameraProps = {
        imageType: ImageType;
        cameraFacing: FacingMode;
        onError: (e: Error) => void;
        samWasmUrl?: string;
        photoTakenCb: DocumentCallback;
        thresholds: Required<DocumentThresholds>;
        validationMode: DocumentValidationMode;
        detectionLayerVisible: boolean;
        uiCustomisation: {
            placeholder: {
                documentPlaceholder: DocumentPlaceholder;
                customSVG?: string;
            };
            instructions: Required<DocumentInstructions>;
            appStateInstructions: Required<DeepRequired<AppStateInstructions>>;
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
            appStateInstructions?: AppStateInstructions;
            colors?: CustomColors;
        };
    };
    export type InitializedFaceCameraProps = {
        imageType: ImageType;
        cameraFacing: FacingMode;
        onError: (e: Error) => void;
        samWasmUrl?: string;
        photoTakenCb: FaceCallback;
        thresholds: Required<FaceThresholds>;
        uiCustomisation: {
            placeholder: {
                facePlaceholder: FacePlaceholder;
                customSVG?: string;
            };
            instructions: Required<FaceInstructions>;
            appStateInstructions: Required<DeepRequired<AppStateInstructions>>;
            colors?: CustomColors;
        };
    };
    export type Point = {
        x: number;
        y: number;
    };
    export interface SamWasmModule extends WebAssembly.Module {
        getInfoString(): string;
        detectDocumentWithImageParameters(width: number, height: number, data: Uint8ClampedArray, paramWidth: number, paramHeight: number): RawDetectedDocument;
        detectFaceWithImageParameters(width: number, height: number, data: Uint8ClampedArray, paramWidth: number, paramHeight: number): RawDetectedFace;
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
        params: ImageParameters;
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
        maskStatus: number;
        params: ImageParameters;
    };
    export type DetectedFace = ImageParameters & {
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
    export type DocumentDetectionDetails = {
        document: DetectedDocument;
        fps: number;
        resolution: Resolution;
        detectionTime: number;
        instructionCode: DocumentInstructionCode;
    };
    export type FaceDetectionDetails = {
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
    export enum AppState {
        LOADING = 0,
        ERROR = 1,
        WAITING = 2,
        RUNNING = 3
    }
    export interface AutoCaptureEvent extends Event {
        detail?: {
            instruction: 'continue-detection';
        };
    }
    export type AnalyticsData = {
        imageResolution: Resolution;
        deviceName?: string;
        averageFps: number;
        captureProcessDurationInMs: number;
    };
    export type DocumentAnalyticsData = AnalyticsData & {
        documentDetection?: DetectedDocument;
    };
    export type FaceAnalyticsData = AnalyticsData & {
        faceDetection?: DetectedFace;
    };
}

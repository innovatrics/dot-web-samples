import { AppStateInstructions, BaseCameraProps, CameraSettings, CustomColors, ImageParameters, Point, Resolution } from './commonTypes';
declare type CustomEvents<K extends string> = {
    [key in K]: (event: CustomEvent) => void;
};
declare type CustomElement<T, K extends string = ''> = Partial<T & HTMLElement & {
    children: unknown;
} & CustomEvents<`on${K}`>>;
declare global {
    interface Window {
        DOT_DEBUG_MODE?: boolean;
    }
    namespace preact.createElement.JSX {
        interface IntrinsicElements {
            ['x-dot-document-auto-capture']: CustomElement<DocumentCameraProps>;
        }
    }
}
export declare type HTMLDocumentCaptureElement = HTMLElement & {
    cameraOptions: DocumentCameraProps;
};
export declare type ParsedDetectedDocument = ImageParameters & {
    confidence: number;
    topLeft: Point;
    topRight: Point;
    bottomRight: Point;
    bottomLeft: Point;
};
export declare type DetectedDocument = ParsedDetectedDocument & ImageParameters & {
    smallestEdge: number;
    placeholderFitError: number;
};
export declare type DocumentComponentData = {
    cameraSettings: CameraSettings;
    detection?: DetectedDocument;
    imageResolution: Resolution;
    record?: DetectedDocument[];
};
export declare type DocumentCallback = (image: Blob, data: DocumentComponentData) => void;
export declare type DocumentThresholds = {
    confidenceThreshold?: number;
    placeholderErrorScoreThreshold?: number;
    sharpnessThreshold?: number;
    brightnessLowThreshold?: number;
    brightnessHighThreshold?: number;
    hotspotsScoreThreshold?: number;
    outOfBoundsThreshold?: number;
    sizeSmallThreshold?: number;
};
export declare type DocumentValidationMode = 'standard' | 'strict';
export declare type DocumentPlaceholder = 'id-rectangle-corners-front' | 'id-rectangle-dash-front' | 'id-rectangle-dot-front' | 'id-rectangle-solid-front' | 'id-rounded-rectangle-photo-front' | 'id-rounded-rectangle-corners-front' | 'id-rounded-rectangle-dash-front' | 'id-rounded-rectangle-dot-front' | 'id-rounded-rectangle-solid-back' | 'id-rounded-rectangle-solid-front' | 'pass-rounded-rectangle-solid-back' | 'pass-rounded-rectangle-solid-back-blank';
export declare type DocumentInstructions = {
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
export declare type DocumentCameraProps = BaseCameraProps & {
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
export {};

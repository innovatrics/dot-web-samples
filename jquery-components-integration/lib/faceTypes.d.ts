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
            ['x-dot-face-auto-capture']: CustomElement<FaceCameraProps>;
        }
    }
}
export declare type HTMLFaceCaptureElement = HTMLElement & {
    cameraOptions: FaceCameraProps;
};
export declare type DetectedFace = ImageParameters & {
    confidence: number;
    topLeft: Point;
    bottomRight: Point;
    faceCenter: Point;
    faceSize: number;
};
export declare type FaceComponentData = {
    cameraSettings: CameraSettings;
    detection?: DetectedFace;
    imageResolution: Resolution;
    record?: DetectedFace[];
};
export declare type FaceCallback = (image: Blob, data: FaceComponentData) => void;
export declare type FaceThresholds = {
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
export declare type FacePlaceholder = 'circle-solid' | 'ellipse-solid' | 'man-solid' | 'woman-solid' | 'square-rounded-dash' | 'square-rounded-solid' | 'square-dash' | 'square-solid';
export declare type FaceInstructions = {
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
export declare type FaceCameraProps = BaseCameraProps & {
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
export {};

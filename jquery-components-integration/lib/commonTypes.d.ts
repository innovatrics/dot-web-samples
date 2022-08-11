export declare type FacingMode = 'environment' | 'user';
export declare type ImageType = 'jpeg' | 'png';
export declare type BaseCameraProps = {
    imageType?: ImageType;
    cameraFacing?: FacingMode;
    onError: (e: Error) => void;
    samWasmUrl?: string;
};
export declare type AppStateInstruction = {
    text?: string;
    visible?: boolean;
};
export declare type AppStateInstructions = {
    loading?: AppStateInstruction;
    waiting?: AppStateInstruction;
};
export declare type CustomColors = {
    placeholderColor?: string;
    placeholderColorSuccess?: string;
    instructionColor?: string;
    instructionColorSuccess?: string;
    instructionTextColor?: string;
};
export declare type ImageParameters = {
    brightness: number;
    sharpness: number;
    hotspots: number;
};
export declare type CameraSettings = MediaTrackSettings & {
    deviceName?: string;
};
export declare type Resolution = {
    width: number;
    height: number;
};
export declare type Point = {
    x: number;
    y: number;
};

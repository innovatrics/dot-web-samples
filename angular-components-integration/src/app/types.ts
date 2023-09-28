import type {
  CallbackImage,
} from "@innovatrics/dot-document-auto-capture";


export enum Step {
  SELECT_COMPONENT,
  DOCUMENT_CAPTURE,
  FACE_CAPTURE,
  MAGNIFEYE_LIVENESS,
  SMILE_LIVENESS
}

export type OnPhotoTakenEventValue<T> = {
  imageData: CallbackImage<T>;
  content: Uint8Array
};

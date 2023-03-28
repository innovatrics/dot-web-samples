
export enum Step {
  SELECT_COMPONENT,
  DOCUMENT_CAPTURE,
  FACE_CAPTURE,
  MAGNIFEYE_LIVENESS
}

export type OnPhotoTakenEventValue<T> = {
  image: Blob;
  data: T
};

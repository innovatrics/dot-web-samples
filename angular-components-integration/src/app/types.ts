export enum Step {
  SELECT_COMPONENT,
  DOCUMENT_CAPTURE,
  FACE_CAPTURE,
  PALM_CAPTURE,
  MAGNIFEYE_LIVENESS,
  SMILE_LIVENESS,
  MULTI_RANGE_LIVENESS,
}

export type OnPhotoTakenEventValue = {
  image: Blob;
};

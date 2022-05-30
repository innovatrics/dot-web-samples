import { DocumentComponentData, FaceComponentData } from "@innovatrics/auto-capture";

export enum Step {
  SELECT_COMPONENT,
  DOCUMENT_CAPTURE,
  FACE_CAPTURE,
  RESULT,
}

export type PhotoTakenCbProps = {
  image: Blob;
  data: DocumentComponentData | FaceComponentData;
};

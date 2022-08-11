import type { DocumentComponentData } from "@innovatrics/dot-document-auto-capture";
import type { FaceComponentData } from "@innovatrics/dot-face-auto-capture";

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

import { DocumentCameraProps, FaceCameraProps } from '@innovatrics/auto-capture';
import { HTMLAttributes } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'x-dot-document-auto-capture': HTMLAttributes<DocumentCameraProps>;
      'x-dot-face-auto-capture': HTMLAttributes<FaceCameraProps>;
    }
  }
}

export enum Step {
  SELECT_COMPONENT,
  DOCUMENT_CAPTURE,
  FACE_CAPTURE,
}

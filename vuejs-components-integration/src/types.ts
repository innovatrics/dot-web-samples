import { DocumentCallback } from '@innovatrics/dot-document-auto-capture/.';
import { FaceCallback } from '@innovatrics/dot-face-auto-capture';
import { MagnifEyeLivenessCallback } from '@innovatrics/dot-magnifeye-liveness';
import { PalmCallback } from '@innovatrics/dot-palm-capture/.';
import { SmileLivenessCallback } from '@innovatrics/dot-smile-liveness';

export enum Step {
  SELECT_COMPONENT,
  DOCUMENT_CAPTURE,
  FACE_CAPTURE,
  PALM_CAPTURE,
  MAGNIFEYE_CAPTURE,
  SMILE_CAPTURE,
}

export type Emits<
  T extends
    | MagnifEyeLivenessCallback
    | FaceCallback
    | DocumentCallback
    | SmileLivenessCallback
    | PalmCallback
> = {
  (e: 'onComplete', ...args: Parameters<T>): void;
  (e: 'onError', error: Error): void;
  (e: 'onBack', step: Step): void;
};

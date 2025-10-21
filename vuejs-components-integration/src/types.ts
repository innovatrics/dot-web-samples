import type { DocumentCallback } from '@innovatrics/dot-document-auto-capture';
import type { FaceCallback } from '@innovatrics/dot-face-auto-capture';
import type { MagnifEyeLivenessCallback } from '@innovatrics/dot-magnifeye-liveness';
import type { OnCompleteCallback } from '@innovatrics/dot-multi-range-liveness';
import type { PalmCallback } from '@innovatrics/dot-palm-capture';
import type { SmileLivenessCallback } from '@innovatrics/dot-smile-liveness';

export enum Step {
  SELECT_COMPONENT,
  DOCUMENT_CAPTURE,
  FACE_CAPTURE,
  PALM_CAPTURE,
  MAGNIFEYE_CAPTURE,
  SMILE_CAPTURE,
  MULTIRANGE_CAPTURE,
}

export type Emits<
  T extends
    | MagnifEyeLivenessCallback
    | FaceCallback
    | DocumentCallback
    | SmileLivenessCallback
    | PalmCallback
    | OnCompleteCallback,
> = {
  (e: 'onComplete', ...args: Parameters<T>): void;
  (e: 'onError', error: Error): void;
  (e: 'onBack', step: Step): void;
};

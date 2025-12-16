import type { DocumentOnCompleteCallback } from '@innovatrics/dot-document-auto-capture';
import type { FaceOnCompleteCallback } from '@innovatrics/dot-face-auto-capture';
import type { MagnifEyeLivenessOnCompleteCallback } from '@innovatrics/dot-magnifeye-liveness';
import type { OnCompleteCallback as MultiRangeLivenessOnCompleteCallback } from '@innovatrics/dot-multi-range-liveness';
import type { PalmOnCompleteCallback } from '@innovatrics/dot-palm-capture';
import type { OnCompleteCallback as SmileLivenessOnCompleteCallback } from '@innovatrics/dot-smile-liveness';

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
    | MagnifEyeLivenessOnCompleteCallback
    | FaceOnCompleteCallback
    | DocumentOnCompleteCallback
    | SmileLivenessOnCompleteCallback
    | PalmOnCompleteCallback
    | MultiRangeLivenessOnCompleteCallback
> = {
  (e: 'onComplete', ...args: Parameters<T>): void;
  (e: 'onError', error: Error): void;
  (e: 'onBack', step: Step): void;
};

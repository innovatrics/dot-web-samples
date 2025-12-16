import type { OnInit } from '@angular/core';

import '@innovatrics/dot-multi-range-liveness';

import type { HTMLMultiRangeLivenessElement } from '@innovatrics/dot-multi-range-liveness';

import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  inject,
  NgZone,
  Output,
} from '@angular/core';

import { OnPhotoTakenEventValue } from '../../types';

@Component({
  selector: 'app-multi-range-liveness-camera',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <x-dot-multi-range-liveness
      id="x-dot-multi-range-liveness"
    ></x-dot-multi-range-liveness>
  `,
})
export class MultiRangeLivenessCameraComponent implements OnInit {
  @Output() photoTaken = new EventEmitter<OnPhotoTakenEventValue>();
  @Output() captureError = new EventEmitter<Error>();

  private ngZone = inject(NgZone);

  ngOnInit(): void {
    this.initMultiRangeLivenessCamera();
  }

  initMultiRangeLivenessCamera() {
    const multiRangeLivenessElement = document.getElementById(
      'x-dot-multi-range-liveness',
    ) as HTMLMultiRangeLivenessElement | null;

    if (multiRangeLivenessElement) {
      multiRangeLivenessElement.configuration = {
        /**
         * At this point use @content property with Digital Identity Service in order to evaluate the MultiRange liveness score.
         * See: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-dis/latest/documentation/#_multirange_liveness_check
         */
        onComplete: (imageData) => {
          this.ngZone.run(() => {
            this.photoTaken.emit({ image: imageData.imageWithMetadata.image });
          });
        },
        onError: (error) => {
          this.ngZone.run(() => {
            this.captureError.emit(error);
          });
        },
        challengeSequence: ['ONE', 'THREE', 'FIVE', 'ZERO'],
      };
    }
  }
}

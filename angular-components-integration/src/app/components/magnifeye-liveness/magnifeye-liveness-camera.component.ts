import {
  Component,
  OnInit,
  NgZone,
  EventEmitter,
  Output,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import '@innovatrics/dot-magnifeye-liveness';
import { OnPhotoTakenEventValue } from '../../types';
import type {
  OnCompleteData,
  HTMLMagnifEyeLivenessElement,
} from '@innovatrics/dot-magnifeye-liveness';

@Component({
  selector: 'app-magnifeye-liveness-camera',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <x-dot-magnifeye-liveness
      id="x-dot-magnifeye-liveness"
    ></x-dot-magnifeye-liveness>
  `,
})
export class MagnifEyeLivenessCameraComponent implements OnInit {
  @Output() photoTaken = new EventEmitter<
    OnPhotoTakenEventValue<OnCompleteData['data']>
  >();
  @Output() captureError = new EventEmitter<Error>();

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.initMagnifEyeLivenessCamera();
  }

  initMagnifEyeLivenessCamera() {
    const magnifEyeLivenessElement = document.getElementById(
      'x-dot-magnifeye-liveness',
    ) as HTMLMagnifEyeLivenessElement | null;

    if (magnifEyeLivenessElement) {
      magnifEyeLivenessElement.props = {
        /**
         * At this point use @content property with Digital Identity Service in order to evaluate the MagnifEye liveness score.
         * See: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-dis/latest/documentation/#_magnifeye_liveness_check
         */
        onComplete: (imageData, content) => {
          this.ngZone.run(() => {
            this.photoTaken.emit({ imageData, content });
          });
        },
        onError: (error) => {
          this.ngZone.run(() => {
            this.captureError.emit(error);
          });
        },
      };
    }
  }
}

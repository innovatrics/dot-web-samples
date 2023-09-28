import { Component, OnInit, NgZone, EventEmitter, Output } from '@angular/core';
import '@innovatrics/dot-magnifeye-liveness';
import { OnPhotoTakenEventValue } from 'src/app/types';
import type { OnCompleteData, HTMLMagnifEyeLivenessElement } from '@innovatrics/dot-magnifeye-liveness';

@Component({
  selector: 'app-magnifeye-liveness-camera',
  templateUrl: './magnifeye-liveness-camera.component.html',
  styleUrls: ['./magnifeye-liveness-camera.component.css']
})
export class MagnifEyeLivenessCameraComponent implements OnInit {
  @Output() onPhotoTaken = new EventEmitter<OnPhotoTakenEventValue<OnCompleteData['data']>>();
  @Output() onError = new EventEmitter<Error>();

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    this.initMagnifEyeLivenessCamera();
  }

  initMagnifEyeLivenessCamera() {
    const magnifEyeLivenessElement = document.getElementById(
      'x-dot-magnifeye-liveness'
    ) as HTMLMagnifEyeLivenessElement | null;

    if (magnifEyeLivenessElement) {
      magnifEyeLivenessElement.props = {
        /**
         * At this point use @content property with Digital Identity Service in order to evaluate the MagnifEye liveness score.
         * See: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-dis/latest/documentation/#_magnifeye_liveness_check
         */
        onComplete: (imageData, content) => {
          this.ngZone.run(() => {
            this.onPhotoTaken.emit({imageData, content});
          });
        },
        onError: (error) => {
          this.ngZone.run(() => {
            this.onError.emit(error);
          });
        },
      };
    }
  }
}

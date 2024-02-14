import {
  Component,
  OnInit,
  NgZone,
  EventEmitter,
  Output,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import '@innovatrics/dot-smile-liveness';
import { OnPhotoTakenEventValue } from '../../types';
import type {
  OnCompleteData,
  HTMLSmileLivenessElement,
} from '@innovatrics/dot-smile-liveness';

@Component({
  selector: 'app-smile-liveness-camera',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: ` <x-dot-smile-liveness
    id="x-dot-smile-liveness"
  ></x-dot-smile-liveness>`,
})
export class SmileLivenessCameraComponent implements OnInit {
  @Output() photoTaken = new EventEmitter<
    OnPhotoTakenEventValue<OnCompleteData['data']>
  >();
  @Output() captureError = new EventEmitter<Error>();

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.initSmileLivenessCamera();
  }

  initSmileLivenessCamera() {
    const smileLivenessElement = document.getElementById(
      'x-dot-smile-liveness',
    ) as HTMLSmileLivenessElement | null;

    if (smileLivenessElement) {
      /**
       * At this point use @content property with Digital Identity Service in order to evaluate the Smile liveness score.
       */
      smileLivenessElement.props = {
        onComplete: (imageData, content) => {
          const [, smileImageData] = imageData;
          this.ngZone.run(() => {
            this.photoTaken.emit({ imageData: smileImageData, content });
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

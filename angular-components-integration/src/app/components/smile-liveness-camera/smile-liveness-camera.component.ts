import { Component, OnInit, NgZone, EventEmitter, Output } from '@angular/core';
import '@innovatrics/dot-smile-liveness';
import { OnPhotoTakenEventValue } from 'src/app/types';
import type { OnCompleteData, HTMLSmileLivenessElement } from '@innovatrics/dot-smile-liveness';

@Component({
  selector: 'app-smile-liveness-camera',
  templateUrl: './smile-liveness-camera.component.html',
  styleUrls: ['./smile-liveness-camera.component.css']
})
export class SmileLivenessCameraComponent implements OnInit {
  @Output() onPhotoTaken = new EventEmitter<OnPhotoTakenEventValue<OnCompleteData['data']>>();
  @Output() onError = new EventEmitter<Error>();

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    this.initSmileLivenessCamera();
  }

  initSmileLivenessCamera() {
    const smileLivenessElement = document.getElementById(
      'x-dot-smile-liveness'
    ) as HTMLSmileLivenessElement | null;

    if (smileLivenessElement) {
      /**
       * At this point use @content property with Digital Identity Service in order to evaluate the Smile liveness score.
       */
      smileLivenessElement.props = {
        onComplete: (imageData, content) => {
          const [, smileImageData] = imageData;
          this.ngZone.run(() => {
            this.onPhotoTaken.emit({imageData: smileImageData, content});
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

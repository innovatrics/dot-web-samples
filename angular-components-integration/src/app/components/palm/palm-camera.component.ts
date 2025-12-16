import {
  Component,
  OnInit,
  NgZone,
  EventEmitter,
  Output,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { OnPhotoTakenEventValue } from '../../types';
import '@innovatrics/dot-palm-capture';
import type { HTMLPalmCaptureElement } from '@innovatrics/dot-palm-capture';

@Component({
  selector: 'app-palm-camera',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <x-dot-palm-capture id="x-dot-palm-capture"></x-dot-palm-capture>
  `,
})
export class PalmCameraComponent implements OnInit {
  @Output() photoTaken = new EventEmitter<OnPhotoTakenEventValue>();
  @Output() captureError = new EventEmitter<Error>();

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.initPalmCapture();
  }

  initPalmCapture() {
    const palmElement = document.getElementById(
      'x-dot-palm-capture',
    ) as HTMLPalmCaptureElement | null;

    if (palmElement) {
      palmElement.configuration = {
        camera: { facingMode: 'environment' },
        onComplete: (imageData) => {
          this.ngZone.run(() => {
            this.photoTaken.emit({ image: imageData.image });
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

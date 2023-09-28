import { Component } from '@angular/core';
import { OnPhotoTakenEventValue, Step } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  step: typeof Step = Step;
  currentStep: Step = Step.SELECT_COMPONENT;
  imageUrl = '';

  constructor() { }

  handleStepChange(step: Step) {
    this.currentStep = step;
    this.imageUrl = '';
  }

  handlePhotoTaken<T>({ imageData, content }: OnPhotoTakenEventValue<T>) {
    this.imageUrl = URL.createObjectURL(imageData.image);
  }

  handleError(error: Error) {
    alert(error);
  }
}

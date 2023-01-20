import { Component } from '@angular/core';
import { OnPhotoTakenEventValue, Step } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  step: typeof Step = Step;
  currentStep: Step = Step.SELECT_COMPONENT;
  imageUrl: string = '';

  constructor() {}

  handleStepChange(step: Step) {
    this.currentStep = step;
    this.imageUrl = '';
  }

  handlePhotoTaken({ image, data }: OnPhotoTakenEventValue) {
    console.log('Data: ', data);
    this.imageUrl = URL.createObjectURL(image);
  }

  handleError(error: Error) {
    alert(error);
  }
}

import { Component } from '@angular/core';
import { PhotoTakenCbProps, Step } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  step: typeof Step = Step;
  currentStep: Step = Step.SELECT_COMPONENT;
  imageUrl: string = '';

  constructor() { }

  handleStepChange(step: Step) {
    this.currentStep = step;
    this.imageUrl = '';
  }

  handlePhotoTaken({ image, data }: PhotoTakenCbProps) {
    console.log("Data: ", data);
    this.imageUrl = URL.createObjectURL(image);
  }

  handleOnError(error: Error) {
    alert(error);
  }
}

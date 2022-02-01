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
  }

  handlePhotoTaken({ image, data }: PhotoTakenCbProps) {
    console.log("Data: ", data);
    this.imageUrl = URL.createObjectURL(image);
    this.currentStep = Step.RESULT;
  }
}

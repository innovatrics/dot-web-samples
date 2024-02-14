import { Component } from '@angular/core';
import { OnPhotoTakenEventValue, Step } from './types';
import { ComponentSelectComponent } from './components/component-select.component';
import { DocumentAutoCaptureComponent } from './components/document/document-auto-capture.component';
import { ResultComponent } from './components/result.component';
import { FaceAutoCaptureComponent } from './components/face/face-auto-capture.component';
import { MagnifEyeLivenessComponent } from './components/magnifeye-liveness/magnifeye-liveness.component';
import { SmileLivenessComponent } from './components/smile-liveness/smile-liveness.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    ComponentSelectComponent,
    DocumentAutoCaptureComponent,
    ResultComponent,
    FaceAutoCaptureComponent,
    MagnifEyeLivenessComponent,
    SmileLivenessComponent,
  ],
})
export class AppComponent {
  step: typeof Step = Step;
  currentStep: Step = Step.SELECT_COMPONENT;
  imageUrl = '';

  handleStepChange(step: Step) {
    this.currentStep = step;
    this.imageUrl = '';
  }

  handlePhotoTaken<T>({ imageData }: OnPhotoTakenEventValue<T>) {
    this.imageUrl = URL.createObjectURL(imageData.image);
  }

  handleError(error: Error) {
    alert(error);
  }
}

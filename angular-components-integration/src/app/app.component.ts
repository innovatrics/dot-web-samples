import type { OnPhotoTakenEventValue } from './types';

import { Component } from '@angular/core';

import { ComponentSelectComponent } from './components/component-select.component';
import { DocumentAutoCaptureComponent } from './components/document/document-auto-capture.component';
import { FaceAutoCaptureComponent } from './components/face/face-auto-capture.component';
import { MagnifEyeLivenessComponent } from './components/magnifeye-liveness/magnifeye-liveness.component';
import { MultiRangeLivenessComponent } from './components/multi-range/multi-range-liveness.component';
import { PalmCaptureComponent } from './components/palm/palm-capture.component';
import { ResultComponent } from './components/result.component';
import { SmileLivenessComponent } from './components/smile-liveness/smile-liveness.component';
import { Step } from './types';

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
    PalmCaptureComponent,
    MultiRangeLivenessComponent,
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

  handlePhotoTaken({ image }: OnPhotoTakenEventValue) {
    this.imageUrl = URL.createObjectURL(image);
  }

  handleError(error: Error) {
    alert(error);
  }
}

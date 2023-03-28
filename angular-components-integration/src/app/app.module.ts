import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DocumentAutoCaptureComponent } from './components/document-auto-capture/document-auto-capture.component';
import { FaceAutoCaptureComponent } from './components/face-auto-capture/face-auto-capture.component';
import { ResultComponent } from './components/result/result.component';
import { ComponentSelectComponent } from './components/component-select/component-select.component';
import { DocumentCameraComponent } from './components/document-camera/document-camera.component';
import { DocumentUiComponent } from './components/document-ui/document-ui.component';
import { FaceUiComponent } from './components/face-ui/face-ui.component';
import { FaceCameraComponent } from './components/face-camera/face-camera.component';
import { MagnifEyeLivenessCameraComponent } from './components/magnifeye-liveness-camera/magnifeye-liveness-camera.component';
import { MagnifEyeLivenessUiComponent } from './components/magnifeye-liveness-ui/magnifeye-liveness-ui.component';
import { MagnifEyeLivenessComponent } from './components/magnifeye-liveness/magnifeye-liveness.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentAutoCaptureComponent,
    FaceAutoCaptureComponent,
    ResultComponent,
    ComponentSelectComponent,
    DocumentCameraComponent,
    DocumentUiComponent,
    FaceUiComponent,
    FaceCameraComponent,
    MagnifEyeLivenessCameraComponent,
    MagnifEyeLivenessUiComponent,
    MagnifEyeLivenessComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

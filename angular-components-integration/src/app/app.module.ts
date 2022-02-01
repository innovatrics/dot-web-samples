import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DocumentAutoCaptureComponent } from './components/document-auto-capture/document-auto-capture.component';
import { FaceAutoCaptureComponent } from './components/face-auto-capture/face-auto-capture.component';
import { ResultComponent } from './components/result/result.component';
import { ComponentSelectComponent } from './components/component-select/component-select.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentAutoCaptureComponent,
    FaceAutoCaptureComponent,
    ResultComponent,
    ComponentSelectComponent,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

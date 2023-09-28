import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OnPhotoTakenEventValue, Step } from 'src/app/types';
import type { OnCompleteData } from '@innovatrics/dot-smile-liveness';
import '@innovatrics/dot-smile-liveness';

@Component({
  selector: 'app-smile-liveness',
  templateUrl: './smile-liveness.component.html',
  styleUrls: ['./smile-liveness.component.css']
})
export class SmileLivenessComponent implements OnInit {
  @Output() onPhotoTaken = new EventEmitter<OnPhotoTakenEventValue<OnCompleteData['data']>>();
  @Output() onError = new EventEmitter<Error>();
  @Output() onBack = new EventEmitter<Step>();

  constructor() { }

  ngOnInit(): void { }

  onBackClick() {
    this.onBack.emit(Step.SELECT_COMPONENT);
  }

  handlePhotoTaken({ imageData, content }: OnPhotoTakenEventValue<OnCompleteData['data']>) {
    this.onPhotoTaken.emit({ imageData, content });
  }

  handleError(error: Error) {
    this.onError.emit(error);
  }
}

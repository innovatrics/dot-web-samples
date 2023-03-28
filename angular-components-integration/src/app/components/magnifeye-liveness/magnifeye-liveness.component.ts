import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OnPhotoTakenEventValue, Step } from 'src/app/types';
import type { OnCompleteData } from '@innovatrics/dot-magnifeye-liveness';

@Component({
  selector: 'app-magnifeye-liveness',
  templateUrl: './magnifeye-liveness.component.html',
  styleUrls: ['./magnifeye-liveness.component.css']
})
export class MagnifEyeLivenessComponent implements OnInit {
  @Output() onPhotoTaken = new EventEmitter<OnPhotoTakenEventValue<OnCompleteData['data']>>();
  @Output() onError = new EventEmitter<Error>();
  @Output() onBack = new EventEmitter<Step>();

  constructor() { }

  ngOnInit(): void { }

  onBackClick() {
    this.onBack.emit(Step.SELECT_COMPONENT);
  }

  handlePhotoTaken({ image, data }: OnPhotoTakenEventValue<OnCompleteData['data']>) {
    this.onPhotoTaken.emit({ image, data });
  }

  handleError(error: Error) {
    this.onError.emit(error);
  }
}

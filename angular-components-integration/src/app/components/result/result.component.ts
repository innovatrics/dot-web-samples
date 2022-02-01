import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { Step } from 'src/app/types';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() imageUrl!: string;
  @Output() backBtnClick = new EventEmitter<Step>();

  imageSrc: SafeUrl = '';

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.imageSrc = this.domSanitizer.bypassSecurityTrustUrl(this.imageUrl)
  }

  onBackClick() {
    this.backBtnClick.emit(Step.SELECT_COMPONENT)
  }

}

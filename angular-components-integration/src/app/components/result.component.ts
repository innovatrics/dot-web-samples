import { Component, OnChanges, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-result',
  standalone: true,
  styles: `
    img {
      width: 100%;
    }
  `,
  template: `
    <div class="container">
      <img [src]="imageSrc" alt="result-image" />
    </div>
  `,
})
export class ResultComponent implements OnChanges {
  @Input() imageUrl!: string;

  imageSrc: SafeUrl = '';

  constructor(private domSanitizer: DomSanitizer) {}

  ngOnChanges(): void {
    this.imageSrc = this.domSanitizer.bypassSecurityTrustUrl(this.imageUrl);
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentAutoCaptureComponent } from './document-auto-capture.component';

describe('DocumentAutoCaptureComponent', () => {
  let component: DocumentAutoCaptureComponent;
  let fixture: ComponentFixture<DocumentAutoCaptureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentAutoCaptureComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentAutoCaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

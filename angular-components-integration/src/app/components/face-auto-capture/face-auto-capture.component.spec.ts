import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceAutoCaptureComponent } from './face-auto-capture.component';

describe('FaceAutoCaptureComponent', () => {
  let component: FaceAutoCaptureComponent;
  let fixture: ComponentFixture<FaceAutoCaptureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaceAutoCaptureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceAutoCaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

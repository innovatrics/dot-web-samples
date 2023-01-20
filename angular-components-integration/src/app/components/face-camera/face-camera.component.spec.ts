import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceCameraComponent } from './face-camera.component';

describe('FaceCameraComponent', () => {
  let component: FaceCameraComponent;
  let fixture: ComponentFixture<FaceCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FaceCameraComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FaceCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

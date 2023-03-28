import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnifEyeLivenessCameraComponent } from './magnifeye-liveness-camera.component';

describe('MagnifEyeLivenessCameraComponent', () => {
  let component: MagnifEyeLivenessCameraComponent;
  let fixture: ComponentFixture<MagnifEyeLivenessCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagnifEyeLivenessCameraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagnifEyeLivenessCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

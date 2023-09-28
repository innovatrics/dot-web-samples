import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmileLivenessCameraComponent } from './smile-liveness-camera.component';

describe('SmileLivenessCameraComponent', () => {
  let component: SmileLivenessCameraComponent;
  let fixture: ComponentFixture<SmileLivenessCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmileLivenessCameraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmileLivenessCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

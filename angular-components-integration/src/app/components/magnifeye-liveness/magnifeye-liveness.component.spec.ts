import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnifEyeLivenessComponent } from './magnifeye-liveness.component';

describe('MagnifEyeLivenessComponent', () => {
  let component: MagnifEyeLivenessComponent;
  let fixture: ComponentFixture<MagnifEyeLivenessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagnifEyeLivenessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagnifEyeLivenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

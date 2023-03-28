import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnifEyeLivenessUiComponent } from './magnifeye-liveness-ui.component';

describe('MagnifEyeLivenessUiComponent', () => {
  let component: MagnifEyeLivenessUiComponent;
  let fixture: ComponentFixture<MagnifEyeLivenessUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagnifEyeLivenessUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagnifEyeLivenessUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

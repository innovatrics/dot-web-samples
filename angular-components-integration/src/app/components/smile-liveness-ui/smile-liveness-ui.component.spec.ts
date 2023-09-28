import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmileLivenessUiComponent } from './smile-liveness-ui.component';

describe('SmileLivenessUiComponent', () => {
  let component: SmileLivenessUiComponent;
  let fixture: ComponentFixture<SmileLivenessUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmileLivenessUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmileLivenessUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

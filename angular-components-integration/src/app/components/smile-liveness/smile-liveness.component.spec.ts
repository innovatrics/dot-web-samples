import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmileLivenessComponent } from './smile-liveness.component';

describe('SmileLivenessComponent', () => {
  let component: SmileLivenessComponent;
  let fixture: ComponentFixture<SmileLivenessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmileLivenessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmileLivenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

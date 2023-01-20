import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceUiComponent } from './face-ui.component';

describe('FaceUiComponent', () => {
  let component: FaceUiComponent;
  let fixture: ComponentFixture<FaceUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FaceUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FaceUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

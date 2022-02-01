import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSelectComponent } from './component-select.component';

describe('ComponentSelectComponent', () => {
  let component: ComponentSelectComponent;
  let fixture: ComponentFixture<ComponentSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

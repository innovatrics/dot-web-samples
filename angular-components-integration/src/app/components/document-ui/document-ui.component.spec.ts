import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentUiComponent } from './document-ui.component';

describe('DocumentUiComponent', () => {
  let component: DocumentUiComponent;
  let fixture: ComponentFixture<DocumentUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DocumentUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

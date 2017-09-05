import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationEditorComponent } from './education-editor.component';

describe('EducationEditorComponent', () => {
  let component: EducationEditorComponent;
  let fixture: ComponentFixture<EducationEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectEditorComponent } from './subject-editor.component';

describe('SubjectEditorComponent', () => {
  let component: SubjectEditorComponent;
  let fixture: ComponentFixture<SubjectEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

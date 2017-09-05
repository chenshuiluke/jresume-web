import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationEditorComponent } from './examination-editor.component';

describe('ExaminationEditorComponent', () => {
  let component: ExaminationEditorComponent;
  let fixture: ComponentFixture<ExaminationEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExaminationEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

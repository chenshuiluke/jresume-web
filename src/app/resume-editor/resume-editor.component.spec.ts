import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeEditorComponent } from './resume-editor.component';

describe('ResumeEditorComponent', () => {
  let component: ResumeEditorComponent;
  let fixture: ComponentFixture<ResumeEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

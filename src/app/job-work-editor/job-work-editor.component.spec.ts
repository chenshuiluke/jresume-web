import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobWorkEditorComponent } from './job-work-editor.component';

describe('JobWorkEditorComponent', () => {
  let component: JobWorkEditorComponent;
  let fixture: ComponentFixture<JobWorkEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobWorkEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobWorkEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolEditorComponent } from './school-editor.component';

describe('SchoolEditorComponent', () => {
  let component: SchoolEditorComponent;
  let fixture: ComponentFixture<SchoolEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

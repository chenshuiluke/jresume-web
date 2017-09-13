import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerWorkEditorComponent } from './volunteer-work-editor.component';

describe('VolunteerWorkEditorComponent', () => {
  let component: VolunteerWorkEditorComponent;
  let fixture: ComponentFixture<VolunteerWorkEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerWorkEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerWorkEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

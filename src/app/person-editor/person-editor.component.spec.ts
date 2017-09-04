import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonEditorComponent } from './person-editor.component';

describe('PersonEditorComponent', () => {
  let component: PersonEditorComponent;
  let fixture: ComponentFixture<PersonEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

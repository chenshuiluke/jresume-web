import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomplishmentsEditorComponent } from './accomplishments-editor.component';

describe('AccomplishmentsEditorComponent', () => {
  let component: AccomplishmentsEditorComponent;
  let fixture: ComponentFixture<AccomplishmentsEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccomplishmentsEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccomplishmentsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

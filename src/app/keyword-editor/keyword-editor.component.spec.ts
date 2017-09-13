import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordEditorComponent } from './keyword-editor.component';

describe('KeywordsEditorComponent', () => {
  let component: KeywordEditorComponent;
  let fixture: ComponentFixture<KeywordEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeywordEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

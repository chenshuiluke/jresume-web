import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePreviewComponent } from './resume-preview.component';

describe('ResumePreviewComponent', () => {
  let component: ResumePreviewComponent;
  let fixture: ComponentFixture<ResumePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

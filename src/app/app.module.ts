import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResumePreviewComponent } from './resume-preview/resume-preview.component';
import { ResumeEditorComponent } from './resume-editor/resume-editor.component';
import { Routes, RouterModule } from '@angular/router';
import { shared } from './shared.provider';
import { PersonEditorComponent } from './person-editor/person-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AccomplishmentsEditorComponent } from './accomplishments-editor/accomplishments-editor.component';
import { EducationEditorComponent } from './education-editor/education-editor.component';
import { ExaminationEditorComponent } from './examination-editor/examination-editor.component';
import { SchoolEditorComponent } from './school-editor/school-editor.component';

import {SuiModule} from 'ng2-semantic-ui';
import { SubjectEditorComponent } from './subject-editor/subject-editor.component';

const routes:Routes = [
  {
    path: '', redirectTo:'/editor', pathMatch:'full'
  },
  {
    path: 'editor', component: ResumeEditorComponent
  },
  {
    path: 'preview', component: ResumePreviewComponent
  }  
];

@NgModule({
  declarations: [
    AppComponent,
    ResumePreviewComponent,
    ResumeEditorComponent,
    PersonEditorComponent,
    AccomplishmentsEditorComponent,
    EducationEditorComponent,
    ExaminationEditorComponent,
    SchoolEditorComponent,
    SubjectEditorComponent
  ],
  imports: [
    BrowserModule,
    SuiModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [shared],
  bootstrap: [AppComponent]
})
export class AppModule { }

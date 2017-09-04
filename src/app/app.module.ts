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
    AccomplishmentsEditorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [shared],
  bootstrap: [AppComponent]
})
export class AppModule { }

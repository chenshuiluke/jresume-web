import { Component, OnInit, Inject } from '@angular/core';
import { Resume } from '../models/resume.model';
@Component({
  selector: 'resume-editor',
  templateUrl: './resume-editor.component.html',
  styleUrls: ['./resume-editor.component.css']
})
export class ResumeEditorComponent implements OnInit {

  constructor(@Inject(Resume) private resume:Resume) { }

  ngOnInit() {
  }

}

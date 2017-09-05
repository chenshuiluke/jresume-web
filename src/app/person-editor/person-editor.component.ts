import { Component, OnInit, Inject } from '@angular/core';
import { Resume } from '../models/resume.model';

@Component({
  selector: 'person-editor',
  templateUrl: './person-editor.component.html',
  styleUrls: ['./person-editor.component.css']
})
export class PersonEditorComponent implements OnInit {

  constructor(@Inject(Resume) public resume:Resume) { }

  ngOnInit() {
  }

}

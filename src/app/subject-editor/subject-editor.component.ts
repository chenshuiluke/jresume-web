import { Component, OnInit, Inject, Input } from '@angular/core';
import { Resume } from '../models/resume.model';
import { Subject } from '../models/subject.model';
@Component({
  selector: 'subject-editor',
  templateUrl: './subject-editor.component.html',
  styleUrls: ['./subject-editor.component.css']
})
export class SubjectEditorComponent implements OnInit {
  @Input('examination_index') examination_index:number;
  constructor(@Inject(Resume) public resume:Resume) { }

  ngOnInit() {
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }    

  deleteSubject(index:number){
    this.resume.education.examinations[this.examination_index].subjects.splice(index,1);
  }

  addSubject(){
    if(!this.resume.education.examinations[this.examination_index].subjects){
      this.resume.education.examinations[this.examination_index].subjects = [];
    }
    this.resume.education.examinations[this.examination_index].subjects.push(new Subject());
  }

}

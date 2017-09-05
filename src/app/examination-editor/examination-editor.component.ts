import { Component, OnInit, Inject } from '@angular/core';
import { Resume } from '../models/resume.model';
import { Education } from '../models/education.model';
import { Examination } from '../models/examination.model';
@Component({
  selector: 'examination-editor',
  templateUrl: './examination-editor.component.html',
  styleUrls: ['./examination-editor.component.css']
})
export class ExaminationEditorComponent implements OnInit {

  constructor(@Inject(Resume) public resume:Resume) { }

  ngOnInit() {
  }

  addExamination(){
    if(!this.resume.education){
      this.resume.education = new Education();
    }

    if(!this.resume.education.examinations){
      this.resume.education.examinations = [];
    }

    this.resume.education.examinations.push(new Examination());

  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }  

  deleteExamination(index:number){
    this.resume.education.examinations.splice(index, 1);
  }  

}

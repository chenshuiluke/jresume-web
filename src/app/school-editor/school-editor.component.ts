import { Component, OnInit, Inject } from '@angular/core';
import { Resume } from '../models/resume.model';
import { Education } from '../models/education.model';
import { School } from '../models/school.model';
@Component({
  selector: 'school-editor',
  templateUrl: './school-editor.component.html',
  styleUrls: ['./school-editor.component.css']
})
export class SchoolEditorComponent implements OnInit {

  constructor(@Inject(Resume) private resume:Resume) { }

  ngOnInit() {
  }

  addSchool(){
    if(!this.resume.education){
      this.resume.education = new Education();
    }

    if(!this.resume.education.schools){
      this.resume.education.schools = [];
    }

    this.resume.education.schools.push(new School());

  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }  

  deleteSchool(index:number){
    this.resume.education.schools.splice(index, 1);
  }

}

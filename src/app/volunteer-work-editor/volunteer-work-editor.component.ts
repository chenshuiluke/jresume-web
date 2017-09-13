import { Component, OnInit, Inject } from '@angular/core';
import { Resume } from '../models/resume.model';
import { VolunteerWork } from '../models/volunteer-work.model';
@Component({
  selector: 'volunteer-work-editor',
  templateUrl: './volunteer-work-editor.component.html',
  styleUrls: ['./volunteer-work-editor.component.css']
})
export class VolunteerWorkEditorComponent implements OnInit {

  constructor(@Inject(Resume) public resume:Resume) { }

  ngOnInit() {
  }

  addVolunteerWork(){
    if(!this.resume.volunteerWork){
      this.resume.volunteerWork = [];
    }
    this.resume.volunteerWork.push(new VolunteerWork());
  }

  deleteVolunteerWork(index:any){
    this.resume.volunteerWork.splice(index, 1);
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  } 

}

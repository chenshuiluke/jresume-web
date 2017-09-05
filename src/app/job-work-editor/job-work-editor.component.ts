import { Component, OnInit, Inject } from '@angular/core';
import { Resume } from '../models/resume.model';
import { JobWork } from '../models/job-work.model';
@Component({
  selector: 'job-work-editor',
  templateUrl: './job-work-editor.component.html',
  styleUrls: ['./job-work-editor.component.css']
})
export class JobWorkEditorComponent implements OnInit {

  constructor(@Inject(Resume) public resume:Resume) { }

  ngOnInit() {
  }

  addJobWork(){
    if(!this.resume.jobWork){
      this.resume.jobWork = [];
    }
    this.resume.jobWork.push(new JobWork());
  }

  deleteJobWork(index:any){
    this.resume.jobWork.splice(index, 1);
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }  

}

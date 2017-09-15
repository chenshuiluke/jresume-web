import { Component, OnInit, Inject } from '@angular/core';
import { Resume } from '../models/resume.model';
import { Project } from '../models/project.model';
@Component({
  selector: 'project-editor',
  templateUrl: './project-editor.component.html',
  styleUrls: ['./project-editor.component.css']
})
export class ProjectEditorComponent implements OnInit {

  constructor(@Inject(Resume) public resume:Resume) { }

  ngOnInit() {
  }

  addProject(){
    if(!this.resume.projects){
      this.resume.projects = [];
    }
    this.resume.projects.push(new Project());
  }

  deleteProject(index:any){
    this.resume.projects.splice(index, 1);
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }     
}

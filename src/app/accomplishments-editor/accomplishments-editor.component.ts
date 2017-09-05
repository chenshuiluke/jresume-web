import { Component, OnInit, Inject } from '@angular/core';
import { Resume } from '../models/resume.model';

@Component({
  selector: 'accomplishments-editor',
  templateUrl: './accomplishments-editor.component.html',
  styleUrls: ['./accomplishments-editor.component.css']
})
export class AccomplishmentsEditorComponent implements OnInit {

  constructor(@Inject(Resume) public resume:Resume) { }

  ngOnInit() {
  }

  addAccomplishment(){
    if(!this.resume.accomplishments){
      this.resume.accomplishments = [""];
    }
    else{
      this.resume.accomplishments.push("");
    }
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }

}

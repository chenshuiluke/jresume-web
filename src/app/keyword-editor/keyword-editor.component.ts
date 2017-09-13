import { Component, OnInit, Input } from '@angular/core';
import { Resume } from '../models/resume.model';
import { Work } from '../models/work.model';
@Component({
  selector: 'keyword-editor',
  templateUrl: './keyword-editor.component.html',
  styleUrls: ['./keyword-editor.component.css']
})
export class KeywordEditorComponent implements OnInit {
  @Input('item')item:any;
  constructor() { }

  ngOnInit() {
  }

  addKeyword(){
    if(!this.item.keywords){
      this.item.keywords = [];
    }
    this.item.keywords.push("");

  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }  

}

import { Component, OnInit, Input, Inject} from '@angular/core';
import { Resume } from '../models/resume.model';
import { Work } from '../models/work.model';
@Component({
  selector: 'highlight-editor',
  templateUrl: './highlight-editor.component.html',
  styleUrls: ['./highlight-editor.component.css']
})
export class HighlightEditorComponent implements OnInit {
  @Input('item')item:any;
  constructor(@Inject(Resume)public resume:Resume) { 

  }

  ngOnInit() {
  }

  addHighlight(){
    if(!this.item.highlights){
      this.item.highlights = [];
    }
    this.item.highlights.push("");

  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }

}

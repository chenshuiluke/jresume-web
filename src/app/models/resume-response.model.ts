import { EventEmitter } from '@angular/core';

export class ResumeResponse{
    html:string;
    emitter:EventEmitter<string> = new EventEmitter;

    setHtml(html){
        this.html = html;
        this.emitter.emit(html);
    }
}
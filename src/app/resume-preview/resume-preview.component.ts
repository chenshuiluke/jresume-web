import { Component, OnInit, Inject,ViewChild, ElementRef } from '@angular/core';
import { ResumeResponse } from '../models/resume-response.model';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'resume-preview',
  templateUrl: './resume-preview.component.html',
  styleUrls: ['./resume-preview.component.css']
})
export class ResumePreviewComponent implements OnInit {
  html:any = `<h4 class="title">Loading...</h4>`;
  @ViewChild('#dataDiv') dataDiv:ElementRef;
  constructor(@Inject(ResumeResponse) private resume_response:ResumeResponse, private sanitizer: DomSanitizer) { 
    this.resume_response.emitter.subscribe((html) => {
      this.html = this.sanitizer.bypassSecurityTrustHtml(html);
    })
  }

  ngOnInit() {
  }

}

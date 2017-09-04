import { Component, Inject } from '@angular/core';
import { Resume } from './models/resume.model';
import { ResumeResponse } from './models/resume-response.model';
import { Http, Response } from '@angular/http';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(@Inject(Resume) private resume:Resume, 
  @Inject(ResumeResponse) private resume_response:ResumeResponse, 
  private http:Http){

  }

  preview(){
    console.log(JSON.stringify(this.resume));
    this.http.post(`${environment.host}${environment.resume_url}`, this.resume)
      .subscribe((response:Response) => {
        console.log(response.text());
        this.resume_response.setHtml(response.text());
      });
  }
}

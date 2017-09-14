import { Component, Inject, OnInit } from '@angular/core';
import { Resume } from './models/resume.model';
import { ResumeResponse } from './models/resume-response.model';
import { Http, Response, RequestOptions, ResponseContentType } from '@angular/http';
import { environment } from '../environments/environment';
import { FileSaverService } from 'ngx-filesaver';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  selectedTheme:string = "default";
  themes:string[] = ["default"];
  loadingThemes:boolean;
  title = 'app';
  loading:boolean = false;

  constructor(@Inject(Resume) private resume:Resume, 
  @Inject(ResumeResponse) private resume_response:ResumeResponse, 
  private http:Http,
  private _FileSaverService: FileSaverService){

  }

  ngOnInit(){
    this.getThemeList();
  }

  clearEmptyResumeParams(o) {
    for (var k in o) {
      if (!o[k] || typeof o[k] !== "object" || k === "person") {
        continue // If null or not an object, skip to the next iteration
      }
  
      // The property is an object
      this.clearEmptyResumeParams(o[k]); // <-- Make a recursive call on the nested object
      if (Object.keys(o[k]).length === 0) {
        delete o[k]; // The object had no properties, so delete that property
      }
    }
  }

  preview(){
    this.clearEmptyResumeParams(this.resume);
    console.log(JSON.stringify(this.resume));
    this.http.post(`${environment.host}${environment.resume_url}/${this.selectedTheme}`, this.resume)
      .subscribe((response:Response) => {
        console.log(response.text());
        this.resume_response.setHtml(response.text());
      });
  }

  downloadHTML(){
    this.clearEmptyResumeParams(this.resume);
    console.log(JSON.stringify(this.resume));
    this.loading = true;
    this.http.post(`${environment.host}${environment.resume_url}/${this.selectedTheme}`, this.resume)
      .subscribe((response:Response) => {
        console.log(response.text());
        this.loading=false;
        this._FileSaverService.save((<any>response)._body, "webresume.html");
      });    
  }

  downloadPDF(){
    this.clearEmptyResumeParams(this.resume);
    console.log(JSON.stringify(this.resume));
    this.loading = true;
    let options = new RequestOptions({
      responseType: ResponseContentType.Blob // 这里必须是Blob类型
    });
    this.http.post(`${environment.host}${environment.pdf_resume_url}/${this.selectedTheme}`, this.resume, options)
      .subscribe((response:Response) => {
        console.log(response.text());
        this.loading=false;
        this._FileSaverService.save((<any>response)._body, "webresume.pdf");
      });    
  }  

  getThemeList(){
    this.loadingThemes = true;
    this.http.get(`${environment.host}${environment.theme_list_url}`)
    .subscribe((response:Response) => {
      console.log(response.text());
      this.loadingThemes=false;
      console.log(response.json());
      this.themes = response.json().themes;
    });   
  }
}

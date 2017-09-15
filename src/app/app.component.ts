import { Component, Inject, OnInit, Renderer, ElementRef, ViewChild } from '@angular/core';
import { Resume } from './models/resume.model';
import { ResumeResponse } from './models/resume-response.model';
import { Http, Response, RequestOptions, ResponseContentType } from '@angular/http';
import { environment } from '../environments/environment';
import { FileSaverService } from 'ngx-filesaver';
import { plainToClass } from "class-transformer";
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
  @ViewChild('jsoninput') jsoninput:ElementRef;

  constructor(@Inject(Resume) private resume, 
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
    this.resume_response.setHtml(`<div class="ui active text loader">Loading</div>`);
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

  triggerJSONInputClick(){
    let event = new MouseEvent('click', {bubbles:true});
    this.jsoninput.nativeElement.dispatchEvent(event);
  }

  importJSON(event:any){
    let value = event.target;
    var file:File = value.files[0]; 
    var myReader:FileReader = new FileReader();
   
    myReader.onloadend = (e) =>{
      let result = myReader.result;
      console.log(myReader.result);
      try{
        let json_obj = JSON.parse(result);
        console.log("Finished import");
        let imported_resume = plainToClass(Resume, json_obj);
        console.log(imported_resume);
        for (var property in imported_resume) {
          if (imported_resume.hasOwnProperty(property)) {
              this.resume[property] = imported_resume[property];
          }
        }        
      }
      catch(e){
        if(e instanceof SyntaxError){
          console.log("Imported JSON is not valid!")
        }
      }     
      
    }

    myReader.readAsText(file);    
  }

  exportJSON(){
    let json = JSON.stringify(this.resume, null, 4);
    var bytes = new Uint8Array(json.length);
    for (var i=0; i<json.length; i++)
        bytes[i] = json.charCodeAt(i);
    this._FileSaverService.save(new Blob([bytes], {type: "application/json"}), "resume.json");

  }
}

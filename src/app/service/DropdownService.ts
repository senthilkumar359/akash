import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  private apiUrl = 'http://localhost:8080/getAllTableName';
  public  posturl = 'http://localhost:8080/addEntryNodup';
  constructor(private http: HttpClient) { }

  getDropdownItems(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }

  saveFormValues(Tableprofile:any):Observable<any>{
    console.log(Tableprofile);
    return this.http.post(this.posturl,Tableprofile)
  }
}
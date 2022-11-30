import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceapisService {

  constructor(private http:HttpClient) { }
  fetchcourses=()=>
  {
    return this.http.get("https://mylinkurcodesapp.herokuapp.com/getcourses")
}
addcourse=(datatosend:any)=>
{
  return this.http.post("http://mylinkurcodesapp.herokuapp.com/addcourse",datatosend)
}
}

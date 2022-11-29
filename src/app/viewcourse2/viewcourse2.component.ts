import { Component } from '@angular/core';
import { ServiceapisService } from '../serviceapis.service';

@Component({
  selector: 'app-viewcourse2',
  templateUrl: './viewcourse2.component.html',
  styleUrls: ['./viewcourse2.component.css']
})
export class Viewcourse2Component {
  constructor(private api:ServiceapisService){
    api.fetchcourses().subscribe(
      (response)=>{
        this.data=response;
      }
    )
  }
  data:any=[]

}

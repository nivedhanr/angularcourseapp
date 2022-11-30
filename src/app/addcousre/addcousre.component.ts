import { Component } from '@angular/core';
import { ServiceapisService } from '../serviceapis.service';

@Component({
  selector: 'app-addcousre',
  templateUrl: './addcousre.component.html',
  styleUrls: ['./addcousre.component.css']
})
export class AddcousreComponent {
  constructor(private api:ServiceapisService){}
  courseTitle=""
  courseDescription=""
  courseDate=""
  courseDuration=""
  distributor=""
  courseVenue=""
  
readValues()
{
  let data:any={"courseTitle":this.courseTitle,"courseDescription":this.courseDescription,"courseDuration":this.courseDuration,"distributor":this.distributor,"courseDate":this.courseDate,"courseVenue":this.courseVenue}
  console.log(data)
  this.api.addcourse(data).subscribe(
    (response: any)=>{
      console.log(response)
      if (response.status == "success") {
        alert("Course added successfully")
        this.courseTitle=""
        this.courseDate=""
        this.courseDescription=""
        this.courseVenue=""
        this.courseDuration=""
        this.distributor=""
      }else{
        alert("Something went wrong")
      }
      }
  ) 
}
}

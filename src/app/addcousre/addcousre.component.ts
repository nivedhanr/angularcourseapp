import { Component } from '@angular/core';

@Component({
  selector: 'app-addcousre',
  templateUrl: './addcousre.component.html',
  styleUrls: ['./addcousre.component.css']
})
export class AddcousreComponent {
  courseTitle=""
  courseDescription=""
  courseDate=""
  courseDuration=""
  courseVenue=""
  
readValues()
{
  let data:any={"courseTitle":this.courseTitle,"courseDescription":this.courseDescription,"courseDuration":this.courseDuration,"courseDate":this.courseDate,"courseVenue":this.courseVenue}
  console.log(data)
}
}

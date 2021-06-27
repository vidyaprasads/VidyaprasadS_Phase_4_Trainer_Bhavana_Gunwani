import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private cookieService:CookieService) { }

  total:any;
  score:any;
  quote:any;
  ngOnInit(): void {
    this.score=this.cookieService.get('score');
    this.total=this.cookieService.get('total');
    console.log(this.score);
    console.log(this.total);
    if(this.score<this.total/2)
    {
        this.quote="It is better to fail in originality than to succeed in imitation."
    }else if(this.score>this.total/2 && this.score<this.total)
    {
      this.quote="The road to success and the road to failure are almost exactly the same."
    }else if(this.score==this.total)
    {
      this.quote="Success usually comes to those who are too busy to be looking for it."
    }
  }

}

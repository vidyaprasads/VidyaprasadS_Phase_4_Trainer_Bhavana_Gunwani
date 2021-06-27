import { ServicesService } from './../service/services.service';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor(private servicesService:ServicesService,private cookieService:CookieService) { }

  jsonresult:any;
  yourans:any;
  data:any=[];
  currectans:any=[];
  demo:any={
      firstname:"raja",
      2:"eoo",
  }
  ngOnInit(): void {

//----------------------------------------
    this.jsonresult=JSON.parse(this.cookieService.get('dataaccess'));
   //-----------------------------------
    // for(let item of this.jsonresult)
    // {
    //   console.log(item.answer);
    //   this.currectans.push(item.answer);
    // }
    this.yourans=JSON.parse(this.cookieService.get('answer'));
    for(let i in this.yourans)
    {
      this.data.push(this.yourans[i]);
    }
    console.log(this.yourans[1]);
    //console.log(this.data);
  //  console.log(this.userans);
   // console.log(this.jsonresult);
   //  console.log(this.currectans);

  }


}

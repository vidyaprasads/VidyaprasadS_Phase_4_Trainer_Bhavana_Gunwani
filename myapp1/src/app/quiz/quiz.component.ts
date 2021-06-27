import { ServicesService } from './../service/services.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private servicesService:ServicesService,private router:Router,private cookieService:CookieService) { }

  jsonresult:any;

  ngOnInit(): void {
   //----------------------------------------
   
    this.jsonresult=JSON.parse(this.cookieService.get('dataaccess'));
   //--------------------------------------
  //  console.log(this.jsonresult);
  }
//user answers------------------------------
  useranswer:any;
  correctanswer:any;
  score:any=0;
  count:any=0;
  quizsubmit(formresult:any)
  {
   this.useranswer=formresult.value;
   this.correctanswer=this.jsonresult
   for(let i=0;i<5;i++){
    if(this.useranswer[i+1]==this.correctanswer[i].answer)
    {
      this.score=this.score+1;
     console.log(this.useranswer[i+1]);
     console.log(this.correctanswer[i].answer);
    }else{
      continue;
    }
    console.log(this.score);
    console.log(Object.keys(this.useranswer).length);
   }
   this.count=Object.keys(this.useranswer).length;
   //-------------------------------------------------

//  console.log(formresult.value);
    alert("Your quiz submited successfully.Please check your score in Result Page.");
    this.router.navigateByUrl('');
    this.cookieService.set('answer',JSON.stringify(this.useranswer));
   // console.log(this.cookieService.set('answer',JSON.stringify(this.useranswer)));
   // console.log(this.cookieService.get('answer'));
    //console.log(JSON.parse(this.cookieService.get('answer')));
    this.cookieService.set('score',this.score);
    this.cookieService.set('total',this.count);
  }
}

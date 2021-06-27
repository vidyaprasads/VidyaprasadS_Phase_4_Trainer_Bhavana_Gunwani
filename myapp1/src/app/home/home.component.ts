import { ServicesService } from './../service/services.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private servicesService:ServicesService) { }

  quiz:any;
  ngOnInit(): void {
    //--------------------------------
    //this.quiz=this.servicesService.response;
    //---------------------------------
    //console.log(this.servicesService.response[0]);
  }
 form(data:any)
 {
    //console.log(data.value);
 }
}

import { ServicesService } from './../service/services.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase, AngularFireObject} from '@angular/fire/database';
//for fetch firebase data
import { map } from 'rxjs/operators';
import retrivemodel from '../models/model';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  resultdata?: retrivemodel[];
  titles?: retrivemodel;
  currentIndex = -1;
  title = '';

  constructor(private http:HttpClient,private db:AngularFireDatabase,private cookieService:CookieService,private ServicesService:ServicesService) { }

  ngOnInit(): void {
      this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.ServicesService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.resultdata = data;
      console.log(this.resultdata);
      this.cookieService.set('dataaccess',JSON.stringify(this.resultdata));
      console.log(JSON.parse(this.cookieService.get('dataaccess')));
    });
  }
  
  
}

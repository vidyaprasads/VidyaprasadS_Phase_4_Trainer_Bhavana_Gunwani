import { AngularFirestore} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import retrivemodel from '../models/model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})

export class ServicesService {
  private dbpath='/quizdata';
  firedata: AngularFireList<retrivemodel>;
  constructor(private http:HttpClient,public fireservices:AngularFirestore,private db:AngularFireDatabase) {
    this.firedata=db.list(this.dbpath);
   }

  getAll():AngularFireList<retrivemodel>
  {
      return this.firedata;
  }
  
}

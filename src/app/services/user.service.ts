import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from "@angular/fire/firestore";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { IGame } from "../models/game.model";
import { IUser } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
      private firestore: Firestore,
      private afs: AngularFirestore
  ) { }

  getUsers(): Observable<IUser[]> {
    const usersRef = collection(this.firestore, 'users');
    return collectionData(usersRef, {idField: 'id'}) as Observable<IUser[]>;
  }

}

import { Injectable } from '@angular/core';
import { collection, collectionData, deleteDoc, doc, Firestore } from "@angular/fire/firestore";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { IUser } from "../models/user.model";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Auth } from "@angular/fire/auth";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private firestore: Firestore,
        private afs: AngularFirestore,
        private afAuth: AngularFireAuth,
        private auth: Auth
    ) {
    }

    getUsers(): Observable<IUser[]> {
        const usersRef = collection(this.firestore, 'users');
        return collectionData(usersRef, {idField: 'id'}) as Observable<IUser[]>;
    }

    deleteUser(userId: any) {
        const userRef = doc(this.firestore, `users/${userId}`);
        return deleteDoc(userRef);
    }

}

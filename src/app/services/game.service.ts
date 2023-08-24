import { Injectable } from '@angular/core';
import {
    addDoc,
    collection,
    collectionData,
    deleteDoc,
    doc,
    docData,
    Firestore,
    setDoc,
    updateDoc
} from "@angular/fire/firestore";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { IBook } from "../models/book.model";
import { IGame } from "../models/game.model";

@Injectable({
    providedIn: 'root'
})
export class GameService {

    gamesPath = "games"

    constructor(
        private firestore: Firestore,
        private afs: AngularFirestore) {
    }

    getGames(): Observable<IGame[]> {
        const gamesRef = collection(this.firestore, this.gamesPath);
        return collectionData(gamesRef, {idField: 'id'}) as Observable<IGame[]>;
    }

    addGame(game: IGame) {
        const gamesRef = collection(this.firestore, this.gamesPath);
        return addDoc(gamesRef, game);
    }

    getBookByID(id: string) {
        const bookRef = doc(this.firestore, `books/${id}`);
        return docData(bookRef, {idField: 'id'}) as Observable<IBook>;
    }

    updateBook(book: IBook) {
        const bookDocRef = doc(this.firestore, `books/${book.id}`);
        return setDoc(bookDocRef, book);
    }

    modifyBookPrice(book: IBook, amount: number) {
        const bookDocRef = doc(this.firestore, `books/${book.id}`);
        return updateDoc(bookDocRef, {price: amount});
    }

    deleteBook(book: IBook) {
        const bookDocRef = doc(this.firestore, `books/${book.id}`);
        return deleteDoc(bookDocRef);
    }

    searchBook(name: string) {
        return this.afs.collection('books', ref =>
            ref.where('name', '==', name)).valueChanges({idField: 'id'});
    }
}

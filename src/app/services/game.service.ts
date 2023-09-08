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

    constructor(
        private firestore: Firestore,
        private afs: AngularFirestore) {
    }

    getGames(): Observable<IGame[]> {
        const gamesRef = collection(this.firestore, 'games');
        return collectionData(gamesRef, {idField: 'id'}) as Observable<IGame[]>;
    }

    addGame(game: IGame) {
        const gamesRef = collection(this.firestore, 'games');
        return addDoc(gamesRef, game);
    }

    getGameById(id: any) {
        const gamesRef = doc(this.firestore, `games/${id}`);
        return docData(gamesRef, {idField: 'id'}) as Observable<IGame>;
    }

    updateGame(game: IGame) {
        const gamesRef = doc(this.firestore, `games/${game.id}`);
        return setDoc(gamesRef, game);
    }

    modifyBookPrice(book: IBook, amount: number) {
        const bookDocRef = doc(this.firestore, `books/${book.id}`);
        return updateDoc(bookDocRef, {price: amount});
    }

    deleteGame(game: IGame) {
        const gamesRef = doc(this.firestore, `games/${game.id}`);



        // Delete games and the collection inside the document






        return deleteDoc(gamesRef);
    }

    searchBook(name: string) {
        return this.afs.collection('books', ref =>
            ref.where('name', '==', name)).valueChanges({idField: 'id'});
    }

    getPlayerListByGameId(id: any) {
        const playerListRef = this.afs.collection('games').doc(id).collection('playerList');
        return playerListRef.valueChanges();
    }

}

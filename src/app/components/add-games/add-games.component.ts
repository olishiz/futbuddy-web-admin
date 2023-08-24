import { Component, OnInit } from '@angular/core';
import { IBook } from "../../models/book.model";
import { BookService } from "../../services/book.service";
import { NgForm } from "@angular/forms";
import { IGame } from "../../models/game.model";
import { GameService } from "../../services/game.service";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import Swal from "sweetalert2";
import { Router } from "@angular/router";

@Component({
    selector: 'app-add-games',
    templateUrl: './add-games.component.html',
    styleUrls: ['./add-games.component.scss']
})
export class AddGamesComponent implements OnInit {

    book: IBook = {name: '', author: '', genre: '', price: 0};
    game: IGame = {location: '', price: '', date: '', time: ''}

    model: NgbDateStruct;
    date: { year: number; month: number };

    constructor(
        private bookService: BookService,
        private gameService: GameService,
        private router: Router) {
    }

    ngOnInit(): void {
    }

    onSubmit(form: NgForm) {
        this.book.price = +this.book.price;
        this.bookService.addBook(this.book).then(() => form.reset());
    }

    onSubmitGame(form: NgForm) {
        this.gameService.addGame(this.game).then(() => {
            Swal.fire(
                'Game Added!',
                'Your game has been added to the record.',
                'success'
            );
            this.router.navigateByUrl('/home', {replaceUrl: true});
        });
    }


}

import { Component, OnInit } from '@angular/core';
import { IGame } from "../../models/game.model";
import { BookService } from "../../services/book.service";
import { GameService } from "../../services/game.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { IBook } from "../../models/book.model";
import { EditGamesComponent } from "../modal/edit-games/edit-games.component";
import Swal from 'sweetalert2'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

    games: IGame[] = [];

    constructor(
        private bookService: BookService,
        private gameService: GameService,
        private modal: NgbModal) {
    }

    ngOnInit() {
        this.gameService.getGames().subscribe((res: IGame[]) => {
            this.games = res
            console.log('the games boy', this.games)
        })

    }

    editModal(game: IGame) {
        const modalRef = this.modal.open(EditGamesComponent, {
            size: 'lg',
            centered: true,
            windowClass: 'dark-modal',
        });

        modalRef.componentInstance.id = game.id;
    }

    deleteBook(book: IBook) {
        if (confirm('Are you sure to delete this record ?') == true) {
            this.bookService.deleteBook(book).then(() => console.log('delete successful'));
        }
    }

    testSwal() {
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )
    }

}

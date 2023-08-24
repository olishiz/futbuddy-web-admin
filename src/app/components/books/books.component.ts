import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditBookComponent } from '../modal/edit-book/edit-book.component';
import { IGame } from "../../models/game.model";
import { GameService } from "../../services/game.service";

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
    books: IBook[] = [];
    games: IGame[] = [];

    constructor(
        private bookService: BookService,
        private gameService: GameService,
        private modal: NgbModal) {
    }

    ngOnInit() {
        this.bookService.getBooks().subscribe((res: IBook[]) => {
            this.books = res;
            console.log('the book boy', this.books)
        })

        this.gameService.getGames().subscribe((res: IGame[]) => {
            this.games = res
            console.log('the games boy', this.games)
        })


    }

    editModal(book: IBook) {
        const modalRef = this.modal.open(EditBookComponent, {
            size: 'lg',
            centered: true,
            windowClass: 'dark-modal',
        });

        modalRef.componentInstance.id = book.id;
    }

    deleteBook(book: IBook) {
        if (confirm('Are you sure to delete this record ?') == true) {
            this.bookService.deleteBook(book).then(() => console.log('delete successful'));
        }
    }
}

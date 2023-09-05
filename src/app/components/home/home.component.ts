import { Component, OnInit } from '@angular/core';
import { IGame } from "../../models/game.model";
import { GameService } from "../../services/game.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { EditGamesComponent } from "../modal/edit-games/edit-games.component";
import Swal from 'sweetalert2'
import { Router } from "@angular/router";


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

    games: IGame[] = [];

    constructor(
        private gameService: GameService,
        private modal: NgbModal,
        private router: Router
    ) {
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

    deleteGame(game: IGame) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.gameService.deleteGame(game).then(() => {
                    Swal.fire(
                        'Deleted!',
                        'Your game has been deleted.',
                        'success'
                    )
                })
            }
        })
    }

    async viewGame(game: IGame) {
        console.log('the game', game)
        await this.router.navigate(['/view-game-detail', game.id]);

    }

    testSwal() {
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )
    }

}

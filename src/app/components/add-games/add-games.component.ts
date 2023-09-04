import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { IGame } from "../../models/game.model";
import { GameService } from "../../services/game.service";
import Swal from "sweetalert2";
import { Router } from "@angular/router";

@Component({
    selector: 'app-add-games',
    templateUrl: './add-games.component.html',
    styleUrls: ['./add-games.component.scss']
})
export class AddGamesComponent implements OnInit {

    game: IGame = {
        name: '',
        location: '',
        price: '',
        date: '',
        time: '',
        status: '',
        numOfPlayers: '',
        arenaPhotoUrl: '',
        formatType: '',
        floorType: ''
    }

    constructor(
        private gameService: GameService,
        private router: Router) {
    }

    ngOnInit(): void {
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

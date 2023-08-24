import { Component, Input, OnInit } from '@angular/core';
import { IGame } from "../../../models/game.model";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { GameService } from "../../../services/game.service";

@Component({
    selector: 'app-edit-games',
    templateUrl: './edit-games.component.html',
    styleUrls: ['./edit-games.component.scss']
})
export class EditGamesComponent implements OnInit {

    @Input() id: string | undefined;
    game: IGame | undefined;

    constructor(
        private gameService: GameService,
        public activeModal: NgbActiveModal
    ) {
    }

    ngOnInit(): void {
    }

}

import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { IGame } from "../../../models/game.model";
import { GameService } from "../../../services/game.service";
import Swal from "sweetalert2";

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

    ngOnInit() {
        if (this.id)
            this.gameService.getGameById(this.id).subscribe((res) => {
                this.game = res;
            });
    }

    onUpdate() {
        if (this.game) {
            this.gameService.updateGame(this.game).then(() => {
                Swal.fire(
                    'Game Updated!',
                    'Your game has been updated to the record.',
                    'success'
                );
                this.activeModal.close();
            });
        }
    }

    closeModal() {
        this.activeModal.close()
    }
}

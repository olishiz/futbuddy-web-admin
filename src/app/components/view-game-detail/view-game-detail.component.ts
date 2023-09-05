import { Component, OnInit } from '@angular/core';
import { IGame } from "../../models/game.model";
import { GameService } from "../../services/game.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-view-game-detail',
    templateUrl: './view-game-detail.component.html',
    styleUrls: ['./view-game-detail.component.scss']
})
export class ViewGameDetailComponent implements OnInit {

    game: IGame | undefined;
    playerList: any;

    constructor(
        private gameService: GameService,
        private route: ActivatedRoute,
        private router: Router
    ) {

    }

    ngOnInit(): void {

        // Get the 'id' parameter from the URL
        const id = this.route.snapshot.paramMap.get('id');

        // Use the 'id' parameter as needed in your component
        console.log('Received id:', id);

        this.gameService.getGameById(id).subscribe((res) => {
            this.game = res;
        });

        this.gameService.getPlayerListByGameId(id).subscribe((res) => {
            this.playerList = res;

            console.log('this.playerList', this.playerList)
        })

    }

    async goToHome() {
        // Navigate to the '/home' route when the back button is clicked
        await this.router.navigate(['/home']);
    }

}

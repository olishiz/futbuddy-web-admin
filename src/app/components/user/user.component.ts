import { Component, OnInit } from '@angular/core';
import { IUser } from "../../models/user.model";
import { IGame } from "../../models/game.model";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: IUser[] = []

  constructor(
      private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((res: IUser[]) => {
      this.users = res
    })
  }

}

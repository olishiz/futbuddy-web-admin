import { Component, OnInit } from '@angular/core';
import { IUser } from "../../models/user.model";
import { UserService } from "../../services/user.service";
import Swal from "sweetalert2";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    users: IUser[] = []

    constructor(
        private userService: UserService
    ) {
    }

    ngOnInit(): void {
        this.userService.getUsers().subscribe((res: IUser[]) => {
            this.users = res
            console.log('the users: ', this.users)
        })
    }

    async deleteUser(user: any) {

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
                this.userService.deleteUser(user.id).then(() => {
                    Swal.fire(
                        'Deleted!',
                        'User has been deleted.',
                        'success'
                    )
                })
            }
        })
    }

}

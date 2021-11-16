import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../shared/services/users.service";
import {Users} from "../../shared/model/users";
import {pipe} from "rxjs";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public users ?: Users[] | null;

  constructor(public userService: UsersService) {
  }

  ngOnInit(): void {
    this.userService.userServiceList$.subscribe((user: Users[] | null) =>
      this.users = user);
  }

  public userDetails(user: Users) {
    this.userService.userDetails(user);
  }


}

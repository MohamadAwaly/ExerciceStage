import {AfterViewInit, Component, OnInit, Output} from '@angular/core';
import {UsersService} from "../../shared/services/users.service";
import {Users} from "../../shared/model/users";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, AfterViewInit {

  public users ?: Users | null;
  public userName ?: string;
  constructor(public userService: UsersService) {
  }

  ngOnInit(): void {
    this.userService.userServiceDetails$.subscribe((user: Users | null) =>
      this.users = user);
    console.log('dans la méthode: ' + this.users?.username);
  }

  ngAfterViewInit(): void {

  }


}

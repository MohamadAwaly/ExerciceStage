import {Injectable} from '@angular/core';
import {Users} from "../model/users";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public userServiceList$: BehaviorSubject<Users[] | null> = new BehaviorSubject<Users[] | null>(null);
  public userServiceDetails$: BehaviorSubject<Users | null> = new BehaviorSubject<Users | null>(null);

  users: Users[] = [{
    id: 1,
    username: 'momo',
    firstName: 'Mohamad',
    lastName: 'awaly',
    password: '123456',
  },
    {
      id: 2,
      username: 'Luc',
      firstName: 'Lucas',
      lastName: 'lu',
      password: '123456',
    }

  ]

  constructor(public user: Users) {
    this.userServiceList$.next(this.users);
  }

  public userDetails(user: Users) : void {
    console.log('user dans le service userDetails '+user.username);
    this.userServiceDetails$.next(user);
  }
}

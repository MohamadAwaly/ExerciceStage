import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class Users {
  id?: number;
  username?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
}


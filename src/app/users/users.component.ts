import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

interface User {
  id: number,
  name: string,
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: User[] = [
    {
      id: 1,
      name: 'jean'
    },
    {
      id: 2,
      name: 'Mohamad'
    },
    {
      id: 3,
      name: 'Awaly'
    }
  ]


  constructor(private router : Router, private activaredRoute : ActivatedRoute) {
  }

  ngOnInit(): void {
  }
  public  redirection(user : User){
    // this.router.navigate(['users', user.id]); // navigate de fasson absolute
    this.router.navigate([user.id], {
      relativeTo: this.activaredRoute,
      queryParams: {
        name : user.name
      },
      fragment: 'foo'
    });
  }

}

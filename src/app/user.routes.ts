import {Routes} from "@angular/router";
import {HomepageComponent} from "./homepage/homepage.component";
import {UsersComponent} from "./users/users.component";
import {UserComponent} from "./user/user.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AuthGuard} from "./auth.guard";


export const routes: Routes = [
  {path: '', component: HomepageComponent},
  {
    path: 'users', canActivate:[AuthGuard], component: UsersComponent, children: [
      {path: ':id', component: UserComponent},
    ],
  },
  {path :'**', redirectTo: ''},

];

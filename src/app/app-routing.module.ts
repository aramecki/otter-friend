import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {path: '', title: 'Home', component: HomeComponent},
  {path: 'signup', title: 'Associati', component: CreateUserComponent},
  {path: 'users', title: 'Lista Associati', component: UserListComponent},
  {path: 'user-details/:id', title: 'Dettagli Socio', component: UserDetailsComponent},
  {path: 'update-user/:id', title: 'Dettagli Socio', component: UpdateUserComponent},
  /* { path: '**', title: 'Not Found', component: NotFoundComponent}, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

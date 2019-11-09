import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogWalkingListComponent } from './dog-walkings/dog-walking-list/dog-walking-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { SignupComponent } from './home/signup/signup.component';
import { LoginComponent } from './home/login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'dog-walking', component: DogWalkingListComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { SignupComponent } from './home/signup/signup.component';
import { LoginComponent } from './home/login/login.component';
import { AuthGuard } from './core/auth/auth.guard';
import { DogWalkingSearchComponent } from './dog-walkings/dog-walking-search/dog-walking-search.component';
import { DogWalkingWalkerComponent } from './dog-walkings/dog-walking-walker/dog-walking-walker.component';
import { DogWalkingPetOwnerComponent } from './dog-walkings/dog-walking-pet-owner/dog-walking-pet-owner.component';


const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [AuthGuard]},
  { path: 'signup', component: SignupComponent},
  { path: 'pet-owner', component: DogWalkingPetOwnerComponent},
  { path: 'walker', component: DogWalkingWalkerComponent},
  { path: 'search', component: DogWalkingSearchComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

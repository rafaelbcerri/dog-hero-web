import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogWalkingListComponent } from './dog-walkings/dog-walking-list/dog-walking-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';


const routes: Routes = [
  { path: 'dog-walking', component: DogWalkingListComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

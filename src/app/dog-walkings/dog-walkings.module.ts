import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DogWalkingSearchComponent } from './dog-walking-search/dog-walking-search.component';
import { DogWalkingWalkerComponent } from './dog-walking-walker/dog-walking-walker.component';
import { DogWalkingPetOwnerComponent } from './dog-walking-pet-owner/dog-walking-pet-owner.component';
import { RouterModule } from '@angular/router';
import { WalkerDogWalkingTodoComponent } from './dog-walking-walker/dog-walking-todo/dog-walking-todo.component';
import { WalkerDogWalkingDoneComponent } from './dog-walking-walker/dog-walking-done/dog-walking-done.component';
import { SearchDogWalkingComponent } from './dog-walking-search/dog-walking/dog-walking.component';
import { PetOwnerDogWalkingComponent } from './dog-walking-pet-owner/dog-walking/dog-walking.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DogWalkingSearchComponent,
    DogWalkingWalkerComponent,
    DogWalkingPetOwnerComponent,
    WalkerDogWalkingTodoComponent,
    WalkerDogWalkingDoneComponent,
    SearchDogWalkingComponent,
    PetOwnerDogWalkingComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class DogWalkingsModule { }

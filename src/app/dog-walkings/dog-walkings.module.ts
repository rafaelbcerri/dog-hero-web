import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DogWalkingComponent } from './dog-walking/dog-walking.component';
import { DogWalkingListComponent } from './dog-walking-list/dog-walking-list.component';
import { DogWalkingSearchComponent } from './dog-walking-search/dog-walking-search.component';
import { DogWalkingWalkerComponent } from './dog-walking-walker/dog-walking-walker.component';
import { DogWalkingPetOwnerComponent } from './dog-walking-pet-owner/dog-walking-pet-owner.component';

@NgModule({
  declarations: [
    DogWalkingComponent,
    DogWalkingListComponent,
    DogWalkingSearchComponent,
    DogWalkingWalkerComponent,
    DogWalkingPetOwnerComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
export class DogWalkingsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DogWalkingComponent } from './dog-walking/dog-walking.component';
import { DogWalkingListComponent } from './dog-walking-list/dog-walking-list.component';

@NgModule({
  declarations: [
    DogWalkingComponent,
    DogWalkingListComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
export class DogWalkingsModule { }

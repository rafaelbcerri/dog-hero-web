import { Component, OnInit } from '@angular/core';
import { DogWalking } from '../dog-walking/dog-walking';
import { DogWalkingService } from '../dog-walking/dog-walking.service';

@Component({
  selector: 'app-dog-walking-pet-owner',
  templateUrl: './dog-walking-pet-owner.component.html',
  styleUrls: ['./dog-walking-pet-owner.component.scss']
})
export class DogWalkingPetOwnerComponent implements OnInit {

  dogWalkings: DogWalking[] = []

  constructor(private dogWalkingService: DogWalkingService) { }

  ngOnInit(): void {
    this.dogWalkingService
      .getPetOwnerDogWalkings()
      .subscribe(
        dogWalkings => this.dogWalkings = dogWalkings,
        err => console.log(err)
      )

  }

}

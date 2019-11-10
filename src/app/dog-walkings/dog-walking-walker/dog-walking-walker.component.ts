import { Component, OnInit } from '@angular/core';
import { DogWalking } from '../dog-walking/dog-walking';
import { DogWalkingService } from '../dog-walking/dog-walking.service';

@Component({
  selector: 'app-dog-walking-walker',
  templateUrl: './dog-walking-walker.component.html',
  styleUrls: ['./dog-walking-walker.component.scss']
})
export class DogWalkingWalkerComponent implements OnInit {

  dogWalkings: DogWalking[] = []

  constructor(private dogWalkingService: DogWalkingService) { }

  ngOnInit(): void {
    this.dogWalkingService
      .getWalkerDogWalkings()
      .subscribe(
        dogWalkings => this.dogWalkings = dogWalkings,
        err => console.log(err)
      )

  }

}

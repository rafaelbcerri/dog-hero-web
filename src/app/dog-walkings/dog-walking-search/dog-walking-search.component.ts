import { Component, OnInit } from '@angular/core';
import { DogWalking } from '../dog-walking/dog-walking';
import { DogWalkingService } from '../dog-walking/dog-walking.service';

@Component({
  selector: 'app-dog-walking-search',
  templateUrl: './dog-walking-search.component.html',
  styleUrls: ['./dog-walking-search.component.scss']
})
export class DogWalkingSearchComponent implements OnInit {

  dogWalkings: DogWalking[] = []

  constructor(private dogWalkingService: DogWalkingService) { }

  ngOnInit(): void {
    this.dogWalkingService
      .getDogWalkings()
      .subscribe(
        dogWalkings => this.dogWalkings = dogWalkings,
        err => console.log(err)
      )

  }

}

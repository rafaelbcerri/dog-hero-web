import { Component, OnInit } from '@angular/core';
import { DogWalkingService } from '../dog-walking/dog-walking.service';
import { DogWalking } from '../dog-walking/dog-walking';

@Component({
  selector: 'app-dog-walking-list',
  templateUrl: './dog-walking-list.component.html',
  styleUrls: ['./dog-walking-list.component.scss']
})
export class DogWalkingListComponent implements OnInit {

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

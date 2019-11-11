import { Component, OnInit } from '@angular/core';
import { DogWalking } from '../dog-walking/dog-walking';
import { DogWalkingService } from '../dog-walking/dog-walking.service';
import { TokenService } from 'src/app/core/token/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dog-walking-walker',
  templateUrl: './dog-walking-walker.component.html',
  styleUrls: ['./dog-walking-walker.component.scss']
})
export class DogWalkingWalkerComponent implements OnInit {

  doneDogWalkings: DogWalking[] = []
  todoDogWalkings: DogWalking[] = []
  userLatitude = null;
  userLongitude = null;
  boundChangeDogWalkingStatus: Function;

  constructor(
    private dogWalkingService: DogWalkingService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dogWalkingService
      .getWalkerDogWalkings()
      .subscribe(
        dogWalkings => {
          this.doneDogWalkings = dogWalkings
            .filter(dogWalking => dogWalking.dog_walking_status_id === 4);
          this.todoDogWalkings = dogWalkings
            .filter(dogWalking => dogWalking.dog_walking_status_id !== 4);
        },
        err => console.log(err)
      );

    this.setUserLocation();
    this.boundChangeDogWalkingStatus = this.changeDogWalkingStatus.bind(this)
  }

  setUserLocation() {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        this.userLatitude = coords.latitude;
        this.userLongitude = coords.longitude;
      },
      (error) => console.log(error),
      { timeout: 20000 }
    );
  }

  changeDogWalkingStatus(dogWalkingId) {
    const finishedDogWalking: DogWalking = this.todoDogWalkings
      .filter(dogWalking => dogWalking.id === dogWalkingId)[0];
    this.todoDogWalkings = this.todoDogWalkings
      .filter(dogWalking => dogWalking.id !== dogWalkingId);
    this.doneDogWalkings.push(finishedDogWalking);
  }

  logout() {
    this.tokenService.removeToken();
    this.router.navigateByUrl('/');
  }

}

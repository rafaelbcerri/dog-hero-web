import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { DogWalking } from '../dog-walking/dog-walking';
import { DogWalkingService } from '../dog-walking/dog-walking.service';
import { TokenService } from 'src/app/core/token/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dog-walking-search',
  templateUrl: './dog-walking-search.component.html',
  styleUrls: ['./dog-walking-search.component.scss']
})
export class DogWalkingSearchComponent implements OnInit {

  dogWalkings: DogWalking[] = []
  userLatitude = null;
  userLongitude = null;
  boundRemoveDogWalking: Function;

  constructor(
    private dogWalkingService: DogWalkingService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dogWalkingService
      .getDogWalkings()
      .subscribe(
        dogWalkings => this.dogWalkings = dogWalkings,
        err => console.log(err)
      );

    this.boundRemoveDogWalking = this.removeDogWalking.bind(this);
    this.setUserLocation();
  }

  removeDogWalking(dogWalkingId) {
    this.dogWalkings = this.dogWalkings
      .filter(dogWalking => dogWalking.id !== dogWalkingId);
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

  logout() {
    this.tokenService.removeToken();
    this.router.navigateByUrl('/');
  }
}

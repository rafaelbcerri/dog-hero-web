import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { DogWalkingService } from '../../dog-walking/dog-walking.service';

@Component({
  selector: 'app-search-dog-walking',
  templateUrl: './dog-walking.component.html',
  styleUrls: ['./dog-walking.component.scss']
})
export class SearchDogWalkingComponent implements OnChanges, OnInit {

  @Input() id: number;
  @Input() duration = "";
  @Input() scheduledDate = "";
  @Input() latitude = "";
  @Input() longitude = "";
  @Input() dogs = [];
  @Input() price = "";
  @Input() dogWalkingStatus = {};
  @Input() userLatitude = {};
  @Input() userLongitude = {};
  @Input() removeDogWalking: Function;
  distance = null;


  constructor(
    private dogWalkingService: DogWalkingService,
  ) { }

  ngOnInit() {
    this.setDistance();
    this.scheduledDate = new Date(this.scheduledDate).toLocaleString('pt-BR')

  }

  ngOnChanges(changes: SimpleChanges) {
    const userLatitude: SimpleChange = changes.userLatitude;
    const userLongitude: SimpleChange = changes.userLongitude;

    this.userLatitude = userLatitude.currentValue
    this.userLongitude = userLongitude.currentValue

    this.setDistance()
  }

  setDistance() {
    this.distance = this.dogWalkingService
      .getDistanceFromLocation(
        this.latitude,
        this.longitude,
        this.userLatitude,
        this.userLongitude
      )
      .toFixed(2);
  }

  selectDogWalking() {
    this.removeDogWalking(this.id);
    this.dogWalkingService
      .setWalkerToDogWalking(this.id)
      .subscribe(
        res => {},
        error => console.log(error)
      );
  }


}

import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { DogWalkingService } from '../../dog-walking/dog-walking.service';
import { DogWalkingStatus } from "../../dog-walking/dog-walking";
@Component({
  selector: 'app-walker-dog-walking-todo',
  templateUrl: './dog-walking-todo.component.html',
  styleUrls: ['./dog-walking-todo.component.scss']
})
export class WalkerDogWalkingTodoComponent implements OnChanges, OnInit {

  @Input() id: number;
  @Input() duration = "";
  @Input() scheduledDate = "";
  @Input() latitude = "";
  @Input() longitude = "";
  @Input() dogs = [];
  @Input() price = "";
  @Input() dogWalkingStatus: DogWalkingStatus;
  @Input() userLatitude = {};
  @Input() userLongitude = {};
  @Input() startDogWalking: Function;
  @Input() finishDogWalking: Function;
  distance = null;
  status = "";

  constructor(
    private dogWalkingService: DogWalkingService,
  ) { }

  ngOnInit() {
    this.setDistance();
    this.translateStatus();
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

  translateStatus() {
    const { name } = this.dogWalkingStatus;
    if (name === 'done') {
      this.status = 'Terminado';
    } else if (name == 'in_progress') {
      this.status = 'Em progresso';
    } else {
      this.status = 'Agendado';
    }
  }

  startWalk() {
    this.status = 'Em progresso';
    this.startDogWalking(this.id);
    this.dogWalkingService
      .startDogWalking(this.id)
      .subscribe(
        () => {},
        (error) => console.log(error)
      );
  }

  finishWalk() {
    this.finishDogWalking(this.id)

    this.dogWalkingService
      .finishDogWalking(this.id)
      .subscribe(
        () => {},
        (error) => console.log(error)
      );
  }

}
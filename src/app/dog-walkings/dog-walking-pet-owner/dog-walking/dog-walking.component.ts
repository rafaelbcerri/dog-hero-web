import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { DogWalkingService } from '../../dog-walking/dog-walking.service';
import { DogWalkingStatus, User } from '../../dog-walking/dog-walking';

@Component({
  selector: 'app-pet-owner-dog-walking',
  templateUrl: './dog-walking.component.html',
  styleUrls: ['./dog-walking.component.scss']
})
export class PetOwnerDogWalkingComponent implements OnInit {

  @Input() duration = "";
  @Input() scheduledDate = "";
  @Input() latitude = "";
  @Input() longitude = "";
  @Input() dogs = [];
  @Input() price = "";
  @Input() walker: User;
  @Input() dogWalkingStatus: DogWalkingStatus;
  distance = null;
  status = "";

  constructor(
    private dogWalkingService: DogWalkingService,
  ) { }

  ngOnInit() {
    this.scheduledDate = new Date(this.scheduledDate).toLocaleString('pt-BR');
    this.translateStatus();
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

}

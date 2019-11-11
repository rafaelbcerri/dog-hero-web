import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { DogWalkingService } from '../../dog-walking/dog-walking.service';

@Component({
  selector: 'app-walker-dog-walking-done',
  templateUrl: './dog-walking-done.component.html',
  styleUrls: ['./dog-walking-done.component.scss']
})
export class WalkerDogWalkingDoneComponent implements OnInit {

  @Input() duration = "";
  @Input() scheduledDate = "";
  @Input() beginDate = "";
  @Input() endDate = "";
  @Input() dogs = [];
  @Input() price = "";
  walkDuration = "";

  constructor(
    private dogWalkingService: DogWalkingService,
  ) { }

  ngOnInit() {
    this.scheduledDate = new Date(this.scheduledDate).toLocaleString('pt-BR')
    const timeDifference = +new Date(this.endDate) - +new Date(this.beginDate);
    this.beginDate = new Date(this.beginDate).toLocaleString('pt-BR')
    this.endDate = new Date(this.endDate).toLocaleString('pt-BR');
    this.walkDuration = new Date(timeDifference).getMinutes().toString();
  }
}

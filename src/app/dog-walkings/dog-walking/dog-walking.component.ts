import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dog-walking',
  templateUrl: './dog-walking.component.html',
  styleUrls: ['./dog-walking.component.scss']
})
export class DogWalkingComponent implements OnInit {

  @Input() duration = "";
  @Input() scheduledDate = "";
  @Input() latitude = "";
  @Input() longitude = "";
  @Input() dogs = [];
  @Input() price = "";
  @Input() dogWalkingStatus = {};

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { DogWalking, Dog } from '../dog-walking/dog-walking';
import { DogWalkingService } from '../dog-walking/dog-walking.service';
import { TokenService } from 'src/app/core/token/token.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dog-walking-pet-owner',
  templateUrl: './dog-walking-pet-owner.component.html',
  styleUrls: ['./dog-walking-pet-owner.component.scss']
})
export class DogWalkingPetOwnerComponent implements OnInit {

  dogWalkings: DogWalking[];
  dogs: Dog[];
  dogWalkingForm: FormGroup;
  userLatitude: string;
  userLongitude: string;
  selectedDogs = [];

  constructor(
    private dogWalkingService: DogWalkingService,
    private tokenService: TokenService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.setUserLocation();

    const date = new Date().toISOString().slice(0, 10);
    const time = new Date()
      .toLocaleString('pT-BR', { timeZone: "America/Sao_Paulo" })
      .slice(11, 16);

    this.dogWalkingForm = this.formBuilder.group({
      duration: ['30', Validators.required],
      date: [date, Validators.required],
      time: [time, Validators.required],
    })



    this.dogWalkingService
      .getUserDogs()
      .subscribe(
        dogs => {
          this.dogs = dogs;
          this.selectedDogs = dogs.map(dog => dog.id);
        },
        error => console.log(error)
      );

    this.dogWalkingService
      .getPetOwnerDogWalkings()
      .subscribe(
        dogWalkings => {
          this.dogWalkings = dogWalkings.sort((a, b) => {
            return +new Date(b.scheduled_date) - +new Date(a.scheduled_date);
          })
        },
        error => console.log(error)
      )
  }

  handleSubmit() {
    const duration = this.dogWalkingForm.get('duration').value;
    const date = this.dogWalkingForm.get('date').value;
    const time = this.dogWalkingForm.get('time').value;

    const isFormValid = this.selectedDogs.length &&
      this.userLatitude &&
      this.userLongitude  &&
      duration &&
      date &&
      time;

    if (!isFormValid) {
      alert('Preencha todos os campos!');
      return false;
    }

    const body = {
      duration,
      latitude: this.userLatitude,
      longitude: this.userLongitude,
      scheduled_date: new Date(`${date} ${time}`).toString(),
      dogs: this.selectedDogs
    };

    this.dogWalkingService
      .createDogWalking(body)
      .subscribe(
        (newDogWalking: DogWalking) => this.dogWalkings.unshift(newDogWalking),
        (error) => console.log(error)
      )
  }

  handleCheckbox(event) {
    const dogId = +event.currentTarget.name
    const index = this.selectedDogs.indexOf(dogId);

    if (index === -1) {
      this.selectedDogs.push(dogId);
    } else {
      this.selectedDogs.splice(index, 1);
    }
  }

  setUserLocation() {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        this.userLatitude = coords.latitude.toString();
        this.userLongitude = coords.longitude.toString();
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

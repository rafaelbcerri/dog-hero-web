import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DogWalking } from './dog-walking';

@Injectable({ providedIn: 'root' })
export class DogWalkingService {
  constructor(private http: HttpClient) { }

  getDogWalkings() {
    return this.http
      .get<DogWalking[]>(`${environment.apiUrl}/dog_walkings`)
  }
}
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DogWalking, Dog } from './dog-walking';
import { TokenService } from 'src/app/core/token/token.service';

@Injectable({ providedIn: 'root' })
export class DogWalkingService {
  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  getDogWalkings() {
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`,
    });
    const params = new HttpParams({
      fromString: 'page=1&per_page=25'
    })

    return this.http
      .get<DogWalking[]>(
        `${environment.apiUrl}/dog-walkings`,
        { headers, params }
      )
  }

  getWalkerDogWalkings() {
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`,
    });
    const { sub } = this.tokenService.getDecodedToken();

    return this.http
      .get<DogWalking[]>(
        `${environment.apiUrl}/walker/${sub}/dog-walkings`,
        { headers }
      )
  }

  getPetOwnerDogWalkings() {
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`,
    });
    const { sub } = this.tokenService.getDecodedToken();

    return this.http
      .get<DogWalking[]>(
        `${environment.apiUrl}/pet-owner/${sub}/dog-walkings`,
        { headers }
      )
  }

  getUserDogs() {
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`,
    });
    const { sub } = this.tokenService.getDecodedToken();

    return this.http
      .get<Dog[]>(
        `${environment.apiUrl}/users/${sub}/dogs`,
        { headers }
      )
  }

  getDistanceFromLocation(lat1, lon1, lat2, lon2) {
    const p = 0.017453292519943295;
    const c = Math.cos;
    const a = 0.5 - c((lat2 - lat1) * p) / 2 +
      c(lat1 * p) * c(lat2 * p) *
      (1 - c((lon2 - lon1) * p)) / 2;

    return 12742 * Math.asin(Math.sqrt(a));
  }

  setWalkerToDogWalking(dogWalkingId) {
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`,
    });
    const { sub } = this.tokenService.getDecodedToken();
    const params = {
      walker_id: sub
    }

    return this.http
      .put(
        `${environment.apiUrl}/dog-walkings/${dogWalkingId}`,
        params,
        { headers }
      )
  }

  startDogWalking(dogWalkingId) {
    const token = this.tokenService.getToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`,
    });

    return this.http
      .post(
        `${environment.apiUrl}/dog-walkings/${dogWalkingId}/start-walk`,
        {},
        { headers }
      )
  }

  finishDogWalking(dogWalkingId) {
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`,
    });

    return this.http
      .post(
        `${environment.apiUrl}/dog-walkings/${dogWalkingId}/finish-walk`,
        {},
        { headers }
      )
  }

  createDogWalking(body) {
    const token = this.tokenService.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`,
    });

    return this.http
      .post(
        `${environment.apiUrl}/dog-walkings`,
        { ...body },
        { headers }
      )
  }
}
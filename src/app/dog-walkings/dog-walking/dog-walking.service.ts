import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DogWalking } from './dog-walking';
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
}
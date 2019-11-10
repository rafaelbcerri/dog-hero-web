import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment";
import { tap } from "rxjs/operators";
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  register(name: string, email: string, password: string, role: string) {
    return this.http
      .post(
        `${environment.apiUrl}/signup`,
        {
          name,
          email,
          password,
          role
        }
      )
  }

  authenticate(email: string, password: string) {
    return this.http
      .post(
        `${environment.apiUrl}/login`,
        {
          email,
          password
        },
        { observe: 'response' }
      )
      .pipe(tap( response => {
        const token = response.headers.get('Authorization').split(' ')[1];
        this.tokenService.setToken(token);
      }))
  }

  isTokenExpired(): boolean {
    const { exp } = this.tokenService.getDecodedToken();
    const currentTime = new Date().getTime() / 1000;
    return currentTime > exp;
  }
}

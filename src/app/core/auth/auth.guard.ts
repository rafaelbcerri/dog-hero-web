import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isLogged = this.tokenService.hasToken();

    if (isLogged) {
      const isExpired = this.authService.isTokenExpired();
      if (isExpired) {
        this.tokenService.removeToken();
        return true;
      }

      const { role } = this.tokenService.getDecodedToken();
      this.router.navigate([ role === 'pet_owner' ? 'pet-owner' : role ]);
      return false;
    }

    return true
  }
}
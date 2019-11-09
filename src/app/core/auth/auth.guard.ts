import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import jwtDecode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isLogged = this.tokenService.hasToken();

    if (isLogged) {
      const token = this.tokenService.getToken();
      const { role } = jwtDecode(token);
      this.router.navigate([role]);
      return false;
    }

    return true
  }
}
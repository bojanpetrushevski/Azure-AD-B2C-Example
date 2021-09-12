import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private authService: AuthService) {
  }

  public canActivate(route: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

      return true;
                      // const isLoggedIn = this.authService.isAuthenticated;

      // if (!isLoggedIn) {
      //    this.authService.signIn();
      // } else {
      //   return new Promise<boolean>(resolve => resolve(true));
      // }
  }

}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router : Router, private jwthelper: JwtHelperService) { }

  canActivate(){
    const token = localStorage.getItem("jwt");

    if(token && !this.jwthelper.isTokenExpired(token)){
      return true;
    }
    this.router.navigate(["error"]);
    return false
    
  }
}

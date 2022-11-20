import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import{AuthService} from './auth.service';
import{Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsGuard implements CanActivate {
  constructor(public _AuthService:AuthService,public _Router:Router)
  {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this._AuthService.mydata.getValue() != null)
      {
        return true;
      }
      else
      {
        this._Router.navigate(['/login'])
      }
  }
  
}

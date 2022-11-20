import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
import{Router} from '@angular/router'
import{userData} from './userData'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  mydata = new BehaviorSubject(null);
  token:any
  constructor( public _HttpClient:HttpClient,public _Router:Router) { }

  signUp(data):Observable<any>
  {
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signup',data)
  }

  login(data):Observable<any>
  {
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signin',data)
  }
  saveUserData(citizen)
  {
    let user = new userData(citizen.first_name, citizen.last_name, citizen.email)
    this.mydata.next(user)
    console.log(this.mydata)
    // this.token =  localStorage.setItem("token",token)
    // console.log(token)
   
  }
  signout()
  {
  localStorage.removeItem("token");
    this._Router.navigate(['/login'])
  console.log("true")
  }
  




}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  err:any;
  loginForm:FormGroup = new FormGroup({
    
    'email' : new FormControl(null, [Validators.email , Validators.required]),
    'password' : new FormControl(null, [Validators.minLength(5), Validators.maxLength(20), Validators.required] ),
  })
    constructor(public _AuthService:AuthService ,  public _Router:Router) { }

  ngOnInit(): void {
  }

  sendData(loginForm)
  {
 
    if(loginForm.valid == true)
    {
     
      this._AuthService.login(loginForm.value).subscribe( data =>{
   
        if(data.message == "success" )
        {
         
          this._AuthService.saveUserData(data.user);
          localStorage.setItem("token",data.token)
          // this._AuthService.deleteToken(data.token)
          this._Router.navigate(['home']);   //problem
          // console.log("yes")
        }
        else
        {
          this.err = "email or password is already registered"
        }
    
      })
    
    }
  }
}

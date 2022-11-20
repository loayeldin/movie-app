import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  err:any
  registerForm:FormGroup = new FormGroup({
    
    'first_name' : new FormControl(null, [Validators.minLength(3), Validators.maxLength(8), Validators.required]),
    'last_name' : new FormControl(null, [Validators.minLength(3), Validators.maxLength(8), Validators.required]),
    'age' : new FormControl(null, [Validators.minLength(10), Validators.maxLength(100), Validators.required]),
    'email' : new FormControl(null, [Validators.email , Validators.required]),
    'password' : new FormControl(null, [Validators.minLength(5), Validators.maxLength(20), Validators.required] ),

    

  })
  constructor(public _AuthService:AuthService ,  public _Router:Router) { }

  ngOnInit(): void {
  }

  sendData(registerForm)
  {
 
    if(registerForm.valid == true)
    {
      this._AuthService.signUp(registerForm.value).subscribe( data =>{
   
        if(data.message == "success")
        {
          this._Router.navigate(['login']);   //problem
          // console.log("yes")
        }
        else
        {
          this.err = "data is registered"
        }
    
      })
    
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { __importDefault } from 'tslib';
import{AuthService} from '../auth.service';
import{Router} from '@angular/router'
import{MovieServiesService} from '../movie-servies.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  islogin:boolean = false;
  username:any;
 
  constructor(public _AuthService:AuthService, _MovieServiesService:MovieServiesService, public _Router:Router)
  {
   
    _AuthService.mydata.subscribe(data =>
      {
        if(data)
        {
          this.islogin = true
          console.log("yes")
        }
        else
        {
          this.islogin = false;
          console.log("no")
        }
      })
 
      
    _AuthService.mydata.subscribe(data=>
      {
        this.username = data
      });

    
  
      
   
    }
     
    signout()
  {
  localStorage.removeItem("token");
    this._Router.navigate(['/login'])
  console.log("true")
  }
 
    


  ngOnInit() {
 
  
  }

}

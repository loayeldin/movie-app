import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import{MyhomeGuard} from './myhome.guard'
import { TvComponent } from './tv/tv.component';
import{MovieDetailsGuard} from './movie-details.guard';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { combineLatest } from 'rxjs';
import { MoviesComponent } from './movies/movies.component';



const routes: Routes = [
  {path:"" , redirectTo:'home' ,pathMatch:'full'},
  {path:"home" ,canActivate:[MyhomeGuard] ,component:HomeComponent},
  {path:"movie-details/:id" , canActivate:[MovieDetailsGuard],component:MovieDetailsComponent},
  {path:"login" , component:LoginComponent},
  {path:"tv" , component:TvComponent},
  {path:"register" , component:RegisterComponent},
  {path:"tv-details/:id", component:TvDetailsComponent},
  {path:"movies", component:MoviesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

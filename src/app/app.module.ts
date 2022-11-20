import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{CommonModule} from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { TvComponent } from './tv/tv.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { MoviesComponent } from './movies/movies.component';

import { TvSearchPipe } from './tv-search.pipe';
import { MoviesSearchPipe } from './movies-search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MovieDetailsComponent,
    RegisterComponent,
    LoginComponent,
    TvComponent,
    TvDetailsComponent,
    MoviesComponent,
    TvSearchPipe,
    MoviesSearchPipe,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

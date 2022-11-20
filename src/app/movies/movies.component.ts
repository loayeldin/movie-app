import { Component, OnInit } from '@angular/core';
import {MovieServiesService} from '../movie-servies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styles: [
  ]
})
export class MoviesComponent implements OnInit {

  trendingmovies:any;
  searchTerm = "";
  imgPrefix = 'https://image.tmdb.org/t/p/w500/';
  constructor( _MovieServiesService:MovieServiesService)
  {

     _MovieServiesService.getMovie().subscribe( data =>{
    
       this.trendingmovies = data.results;
   
      
      
     }, (err)=>{console.log(err)});


  

   }

  ngOnInit(): void {
  }

}

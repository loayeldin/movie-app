import { Component, OnInit } from '@angular/core';
import {MovieServiesService} from '../movie-servies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  all = [];
  
  trendingMovies = [];
  trendingTv = [];
  trendig = [];
  searchTerm="";
  imgPrefix = 'https://image.tmdb.org/t/p/w500/';
  constructor( _MovieServiesService:MovieServiesService)
   {
    
      _MovieServiesService.getMovie().subscribe( data =>{
        
        this.trendingMovies = data.results;
        this.all.push(this.trendingMovies);
      
       
      }, (err)=>{console.log(err)});

      _MovieServiesService.getTv().subscribe( data =>{
        
        this.trendingTv = data.results;
        this.all.push(this.trendingTv);
       
    
       
       
      }, (err)=>{console.log(err)});

    


     
    

    }

  ngOnInit(): void {
  }

}

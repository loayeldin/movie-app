import { Component, OnInit } from '@angular/core';
import {MovieServiesService} from '../movie-servies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  trendingTv = [];
  searchTerm = "";
  imgPrefix = 'https://image.tmdb.org/t/p/w500/';
  constructor( _MovieServiesService:MovieServiesService)
  {

     _MovieServiesService.getTv().subscribe( data =>{
       
       this.trendingTv = data.results;
   
      
      
     }, (err)=>{console.log(err)});


  

   }

  ngOnInit(): void {
  }

}

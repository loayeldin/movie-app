import { Component, OnInit } from '@angular/core';
import {MovieServiesService} from '../movie-servies.service' ;
import {ActivatedRoute} from '@angular/router';
import { AssertNotNull } from '@angular/compiler';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  id:any
  moviesDetails:any = [];
 
  imgPrefix = 'https://image.tmdb.org/t/p/w500/';
  assideMovies:any = []
  isLoading:Boolean = false;
  constructor(_ActivatedRoute:ActivatedRoute , _MovieServiesService:MovieServiesService) {

     this.id =  _ActivatedRoute.snapshot.paramMap.get('id')
    
    _MovieServiesService.getMoviesDetails(this.id).subscribe( data =>
      {
        this.moviesDetails = data;
        this.isLoading = true;
       
      
      });

    

     

      _MovieServiesService.getMovie().subscribe(data=>
        {
          for(let i=0 ; i <5 ; i++)
          {
            this.assideMovies.push(data.results[i])

          }
          console.log(this.assideMovies)
        })
   }

  ngOnInit(): void {
  }

}

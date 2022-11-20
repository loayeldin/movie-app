import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import{MovieServiesService} from '../movie-servies.service'

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})
export class TvDetailsComponent implements OnInit {

  tvDetails:any;
  id:any;
  imgPrefix = 'https://image.tmdb.org/t/p/w500/';
  assideMovies:any = []
  isLoading:Boolean = false;
  constructor(_ActivatedRoute:ActivatedRoute, _MovieServiesService:MovieServiesService)
   {
    this.id = _ActivatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);

    _MovieServiesService.getTvDetails(this.id).subscribe( data=>
      {
        this.tvDetails = data;
        this.isLoading = true;
      })


      _MovieServiesService.getTv().subscribe(data =>
        {
          for(let i= 0 ; i<5 ; i++)
          {
            this.assideMovies.push(data.results[i])
          }
        })

    }

  ngOnInit(): void {
  }

}

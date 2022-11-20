import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {userData} from './userData'

@Injectable({
  providedIn: 'root'
})
export class MovieServiesService {
  userData:any;

  constructor( public _HttpClient:HttpClient) { }

  getMovie():Observable<any>
  {
   return this._HttpClient.get('https://api.themoviedb.org/3/trending/movie/week?api_key=7620e29f2bee732e5ce59b9cf18bbd54')
  };

  getTv():Observable<any>
  {
   return this._HttpClient.get('https://api.themoviedb.org/3/trending/tv/week?api_key=7620e29f2bee732e5ce59b9cf18bbd54')
  }
  // getTrending():Observable<any>
  // {
  //  return this._HttpClient.get('https://api.themoviedb.org/3/trending/all/week?api_key=7620e29f2bee732e5ce59b9cf18bbd54')
  // }

  getMoviesDetails(id):Observable<any>
  {
   return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=7620e29f2bee732e5ce59b9cf18bbd54&language=en-US`)
  }
  getTvDetails(id):Observable<any>
  {
   return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=7620e29f2bee732e5ce59b9cf18bbd54&language=en-US&language=en-US`)
  }

}

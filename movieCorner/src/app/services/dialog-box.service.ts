import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies } from '../models/movies';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogBoxService {

  constructor(private http : HttpClient) { }

  cast(movieId) : Observable<Movies[]>  {
    return this.http.get<Movies[]>("https://yts.am/api/v2/movie_details.json?movie_id="+movieId+"&with_cast=true")
  }
}

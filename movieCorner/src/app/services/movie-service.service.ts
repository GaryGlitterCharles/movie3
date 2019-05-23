import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Movies } from "../models/movies";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MovieServiceService {
  constructor(private http: HttpClient) {}

 


  getAllmoviesList(number,number2): Observable<Movies[]> {

    return this.http.get<Movies[]>("https://yts.am/api/v2/list_movies.json?page="+number+"&limit="+number2);
  }
  ratingURL(rating){
    return this.http.get<Movies[]>("https://yts.am/api/v2/list_movies.json?minimum_rating="+rating);
  }
  genres(music){
    return this.http.get<Movies[]>("https://yts.am/api/v2/list_movies.json?genre="+music);
  }
}

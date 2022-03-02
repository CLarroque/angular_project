import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  // URL absolue
  serverUrl = 'https://movie-api.benoithubert.me';
  // chemin relatif sur le serveur
  moviesPath = '/movies';

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(
        `${this.serverUrl}${this.moviesPath}`
      );
  }
}

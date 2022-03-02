import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

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

  private handleError(error: HttpErrorResponse | string) {
    // TODO: trouver une façon plus élégante
    if (typeof error === 'string') {
      return throwError(error);
    }
    let errorMessage = '';
    switch (error.status) {
      case 0:
        errorMessage = 'A network error occurred. Please come back later';
        break;
      case 400:
        errorMessage = 'There are missing or misformated fields.';
        break;
      case 404:
        errorMessage = 'This movie does not exist anymore.';
        break;
      default:
        errorMessage = 'An unexpected error occurred.';
    }
    return throwError(errorMessage);
  }

  getAllMovies(): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(
        `${this.serverUrl}${this.moviesPath}`
      );
  }

  getMovie(movieId: number): Observable<Movie> {
    return this.http
      .get<Movie>(
        `${this.serverUrl}${this.moviesPath}/${movieId}`
      )
      .pipe(
        catchError(error => this.handleError(error))
      );
  }
}

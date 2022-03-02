import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GenreCat } from './genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  // URL absolue
  serverUrl = 'https://movie-api.benoithubert.me';
  // chemin relatif sur le serveur
  genresPath = '/genres';

  constructor(private http: HttpClient) { }

  getAllGenres(): Observable<GenreCat[]> {
    return this.http
      .get<GenreCat[]>(
        `${this.serverUrl}${this.genresPath}`
      );
  }
}

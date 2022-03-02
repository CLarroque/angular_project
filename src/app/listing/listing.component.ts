import { Component, OnInit } from '@angular/core';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getAllMovies()
      .subscribe(movies => {
        this.movies = movies;
      });
  }

}

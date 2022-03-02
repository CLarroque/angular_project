import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Movie } from '../movie';
import { GenreService } from '../genre.service';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  movies: Movie[] = [];

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.movieService.getAllMovies()
      .subscribe(movies => {
        this.movies = movies;
        if(id) {
          this.movies = this.movies.filter(e => {
            if(e.genre_ids.includes(id)) {
              return true;
            }
            return false;
          })
        }
      });
  }

}

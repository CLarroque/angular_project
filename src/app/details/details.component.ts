import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  movie?: Movie;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovie(id).subscribe({
      next: (movie: Movie) => {
        this.movie = movie;
        console.log(this.movie);
      },
      error: (error: string) => {
        console.error(error);
      }
    })
  }

}

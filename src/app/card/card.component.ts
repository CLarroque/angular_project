import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() movie!: Movie;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

}

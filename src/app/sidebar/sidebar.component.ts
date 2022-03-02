import { Component, OnInit } from '@angular/core';

import { GenreService } from '../genre.service';
import { GenreCat } from '../genre';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  genres: GenreCat[] = [];

  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
    this.genreService.getAllGenres()
      .subscribe(genres => {
        this.genres = genres;
      });
  }

}

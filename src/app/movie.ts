export class Movie {
    id!: number; 
    release_date!: Date; 
    title!: string;     
    vote_average!: number; 
    poster_path!: string; 
    tagline!: string; 
    runtime!: number; 
    spoken_languages!: Language[];
    genres!: Genre[];
  }

export class Language {
  english_name!: string;
  iso_639_1!: string;
  name!: string;
}

export class Genre {
  id!: number;
  name!: string;
}
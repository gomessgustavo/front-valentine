import { GenerosFilmesEntity } from "./Generos.entity";

export class GenerosFilmesResponseEntity {
  genres: GenerosFilmesEntity[];

  constructor(genres: GenerosFilmesEntity[]) {
    this.genres = genres;
  }
}

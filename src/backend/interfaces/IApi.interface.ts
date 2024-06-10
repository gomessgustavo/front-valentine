import { FilmesResponseEntity } from "../entities/FilmesResponse.entity";
import { GenerosFilmesEntity } from "../entities/Generos.entity";

export interface IApi {
  buscarFilmes(
    generos: number[],
    mediaVotos: number,
    minVotos: number
  ): Promise<FilmesResponseEntity[]>;
  buscarGeneros(): Promise<GenerosFilmesEntity[]>;
}

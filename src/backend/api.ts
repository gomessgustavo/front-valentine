import axios, { AxiosResponse } from "axios";
import { IApi } from "./interfaces/IApi.interface";
import { GenerosFilmesEntity } from "./entities/Generos.entity";
import { FilmesResponseEntity } from "./entities/FilmesResponse.entity";
import { GenerosFilmesResponseEntity } from "./entities/GenerosFilmesResponse.entity";
import { FilmesApiResponseEntity } from "./entities/FilmesApiResponse.entity";

const URL = "https://api.themoviedb.org/3";

export class Api implements IApi {
  async buscarFilmes(
    generos: number[],
    mediaVotos?: number,
    minVotos?: number,
    totalPages?: number
  ): Promise<FilmesResponseEntity[]> {
    const paginas = totalPages || 500;
    const res: AxiosResponse<FilmesApiResponseEntity> = await axios.get(
      URL.concat("/discover/movie"),
      {
        params: {
          language: "pt-BR",
          page: Math.floor(Math.random() * paginas),
          with_genres: generos.join(","),
          sort_by: "popularity.desc",
          include_adult: false,
          "vote_average.gte": mediaVotos,
          "vote_count.gte": minVotos,
        },
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
      }
    );

    if (res.data.results.length === 0) {
      return this.buscarFilmes(generos, mediaVotos, minVotos, totalPages);
    }

    return res.data.results;
  }

  async buscarGeneros(): Promise<GenerosFilmesEntity[]> {
    const res: AxiosResponse<GenerosFilmesResponseEntity> = await axios.get(
      URL.concat("/genre/movie/list"),
      {
        params: { language: "pt" },
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
      }
    );

    return res.data.genres;
  }
}

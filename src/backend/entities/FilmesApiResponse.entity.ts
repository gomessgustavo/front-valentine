import { FilmesResponseEntity } from "./FilmesResponse.entity";

export class FilmesApiResponseEntity {
  page: number;
  results: FilmesResponseEntity[];
  total_pages: number;
  total_results: number;

  constructor(
    page: number,
    results: FilmesResponseEntity[],
    total_pages: number,
    total_results: number
  ) {
    this.page = page;
    this.results = results;
    this.total_pages = total_pages;
    this.total_results = total_results;
  }
}

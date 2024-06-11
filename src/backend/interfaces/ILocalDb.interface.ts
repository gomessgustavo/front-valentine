import { AxiosResponse } from "axios";
import { CoisaQueAmoEntity } from "../entities/CoisasQueAmo.entity";
import { FilmesDbEntity } from "../entities/FilmesDb.entity";
import { FotosEntity } from "../entities/Fotos.entity";
import { RestauranteEntity } from "../entities/Restaurante.entity";
import { RestauranteDbEntity } from "../entities/RestauranteDb.entity";

export interface IlocalDb {
  getCoisasQueAmo(): Promise<CoisaQueAmoEntity[]>;
  getCoisaQueAmo(): Promise<CoisaQueAmoEntity>;
  atualizarCoisaQueAmo(item: CoisaQueAmoEntity): Promise<void>;
  inserirFilme(nomeFilme: string): Promise<AxiosResponse>;
  getFilmes(): Promise<FilmesDbEntity[]>;
  getFotos(): Promise<FotosEntity[]>;
  inserirRestaurante(
    restauranteEntity: RestauranteEntity
  ): Promise<AxiosResponse>;
  getRestaurantes(): Promise<RestauranteDbEntity[]>;
}

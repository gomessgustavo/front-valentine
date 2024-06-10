import { AxiosResponse } from "axios";
import { CoisaQueAmoEntity } from "../entities/CoisasQueAmo.entity";
import { FilmesDbEntity } from "../entities/FilmesDb.entity";
import { FotosEntity } from "../entities/Fotos.entity";

export interface IlocalDb {
  getCoisasQueAmo(): Promise<CoisaQueAmoEntity[]>;
  getCoisaQueAmo(): Promise<CoisaQueAmoEntity>;
  atualizarCoisaQueAmo(item: CoisaQueAmoEntity): Promise<void>;
  inserirFilme(nomeFilme: string): Promise<AxiosResponse>;
  getFilmes(): Promise<FilmesDbEntity[]>;
  getFotos(): Promise<FotosEntity[]>;
}

import { CoisaQueAmoEntity } from "./entities/CoisasQueAmo.entity";
import { FilmesDbEntity, FilmesStatusEnum } from "./entities/FilmesDb.entity";
import { FotosEntity } from "./entities/Fotos.entity";
import { IlocalDb } from "./interfaces/ILocalDb.interface";
import axios, { AxiosResponse } from "axios";

export class LocalDb implements IlocalDb {
  async getCoisaQueAmo(): Promise<CoisaQueAmoEntity> {
    const items = await this.getCoisasQueAmo();
    const naoVistos = items.filter((item) => item.visto === false);

    let random: CoisaQueAmoEntity;
    if (naoVistos.length === 0) {
      random = items[Math.floor(Math.random() * items.length)];
    } else {
      random = naoVistos[Math.floor(Math.random() * naoVistos.length)];
    }

    return random;
  }

  async getCoisasQueAmo(): Promise<CoisaQueAmoEntity[]> {
    try {
      const res = await axios.get<CoisaQueAmoEntity[]>(
        "http://back-valentines.vercel.app/coisasQueAmoEmVoce"
      );
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getFilmes(): Promise<FilmesDbEntity[]> {
    try {
      const res = await axios.get<FilmesDbEntity[]>(
        "http://back-valentines.vercel.app/filmes"
      );
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async inserirFilme(nomeFilme: string): Promise<AxiosResponse> {
    try {
      const res = await axios.post("http://back-valentines.vercel.app/filmes", {
        nome: nomeFilme,
        status: FilmesStatusEnum.NAO_INICIADO,
      });
      return res;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async atualizarFilme(req: {
    nome: string;
    status: FilmesStatusEnum;
    id: string;
  }): Promise<AxiosResponse> {
    try {
      const res = await axios.put(
        "http://back-valentines.vercel.app/filmes/".concat(req.id),
        {
          nome: req.nome,
          status: req.status,
        }
      );
      return res;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async atualizarCoisaQueAmo(item: CoisaQueAmoEntity): Promise<void> {
    try {
      await axios.put(
        `http://back-valentines.vercel.app/coisasQueAmoEmVoce/${item.id}`,
        {
          frase: item.frase,
          visto: true,
        }
      );
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getFotos(): Promise<FotosEntity[]> {
    try {
      const res = await axios.get<FotosEntity[]>(
        `http://back-valentines.vercel.app/fotos`
      );

      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

import { CoisaQueAmoEntity } from "./entities/CoisasQueAmo.entity";
import { FilmesDbEntity, FilmesStatusEnum } from "./entities/FilmesDb.entity";
import { FotosEntity } from "./entities/Fotos.entity";
import { RestauranteEntity } from "./entities/Restaurante.entity";
import { RestauranteDbEntity } from "./entities/RestauranteDb.entity";
import { IlocalDb } from "./interfaces/ILocalDb.interface";
import axios, { AxiosResponse } from "axios";

const URL_BASE = "https://back-valentines.onrender.com/";

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
        URL_BASE + "coisasQueAmoEmVoce"
      );
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getFilmes(): Promise<FilmesDbEntity[]> {
    try {
      const res = await axios.get<FilmesDbEntity[]>(URL_BASE + "filmes");
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async inserirFilme(nomeFilme: string): Promise<AxiosResponse> {
    try {
      const res = await axios.post(URL_BASE + "filmes", {
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
      const res = await axios.put(URL_BASE + "filmes/".concat(req.id), {
        nome: req.nome,
        status: req.status,
      });
      return res;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async atualizarCoisaQueAmo(item: CoisaQueAmoEntity): Promise<void> {
    try {
      await axios.put(URL_BASE + `coisasQueAmoEmVoce/${item.id}`, {
        frase: item.frase,
        visto: true,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getFotos(): Promise<FotosEntity[]> {
    try {
      const res = await axios.get<FotosEntity[]>(URL_BASE + `fotos`);

      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async inserirRestaurante(
    restauranteEntity: RestauranteEntity
  ): Promise<AxiosResponse> {
    try {
      const res = await axios.post(
        URL_BASE + "restaurantes",
        restauranteEntity
      );
      return res;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getRestaurantes(): Promise<RestauranteDbEntity[]> {
    try {
      const res = await axios.get<RestauranteDbEntity[]>(
        URL_BASE + `restaurantes`
      );

      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getRestaurantesFiltrados(data: {
    nomeRestaurante: string;
    cidade: string;
    minComida: number;
    maxComida: number;
    minAmbiente: number;
    maxAmbiente: number;
    minAtendimento: number;
    maxAtendimento: number;
    minValor: number;
    maxValor: number;
  }): Promise<RestauranteDbEntity[]> {
    try {
      const res = await axios.get<RestauranteDbEntity[]>(
        URL_BASE + `restaurantes`,
        {
          params: {
            nomeRestaurante_like: data.nomeRestaurante,
            cidade_like: data.cidade,
            atendimento_gte: data.minAtendimento,
            atendimento_lte: data.maxAtendimento,
            ambiente_gte: data.minAmbiente,
            ambiente_lte: data.maxAmbiente,
            comida_gte: data.minComida,
            comida_lte: data.maxComida,
            precoMedio_gte: data.minValor,
            precoMedio_lte: data.maxValor,
          },
        }
      );

      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

import { FilmesStatusEnum } from "../backend/entities/FilmesDb.entity";

export class MapperFilmesEnum {
  static toLabel(status: FilmesStatusEnum): string {
    const mapper = {
      [FilmesStatusEnum.CONCLUIDO]: "Concluído",
      [FilmesStatusEnum.NAO_INICIADO]: "Não Iniciado",
      [FilmesStatusEnum.EM_PROGRESSO]: "Em progresso",
    };

    return mapper[status];
  }
}

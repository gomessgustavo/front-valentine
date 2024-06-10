export enum FilmesStatusEnum {
  CONCLUIDO = "CONCLUIDO",
  NAO_INICIADO = "NAO_INICIADO",
  EM_PROGRESSO = "EM_PROGRESSO",
}

export class FilmesDbEntity {
  id: string;
  nome: string;
  status: FilmesStatusEnum;

  constructor(id: string, nome: string, status: FilmesStatusEnum) {
    this.id = id;
    this.nome = nome;
    this.status = status;
  }
}

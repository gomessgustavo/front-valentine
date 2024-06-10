export class FotosEntity {
  id: string;
  link: string;
  descricao: string;

  constructor(id: string, link: string, descricao: string) {
    this.id = id;
    this.link = link;
    this.descricao = descricao;
  }
}

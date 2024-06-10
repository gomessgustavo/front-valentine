export class CoisaQueAmoEntity {
  id: number;
  frase: string;
  visto: boolean;

  constructor(id: number, frase: string, visto: boolean) {
    this.id = id;
    this.frase = frase;
    this.visto = visto;
  }
}

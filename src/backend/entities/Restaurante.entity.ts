export class RestauranteEntity {
  nomeRestaurante: string;
  cidade: string;
  comida: number;
  atendimento: number;
  ambiente: number;
  precoMedio: number;

  constructor(
    nomeRestaurante: string,
    cidade: string,
    comida: number,
    atendimento: number,
    ambiente: number,
    precoMedio: number
  ) {
    this.nomeRestaurante = nomeRestaurante;
    this.cidade = cidade;
    this.comida = comida;
    this.atendimento = atendimento;
    this.ambiente = ambiente;
    this.precoMedio = precoMedio;
  }
}

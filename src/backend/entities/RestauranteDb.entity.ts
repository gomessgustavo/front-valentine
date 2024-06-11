import { RestauranteEntity } from "./Restaurante.entity";

export class RestauranteDbEntity extends RestauranteEntity {
  id: string;

  constructor(id: string, restaurante: RestauranteEntity) {
    super(
      restaurante.nomeRestaurante,
      restaurante.cidade,
      restaurante.comida,
      restaurante.atendimento,
      restaurante.ambiente,
      restaurante.precoMedio
    );
    this.id = id;
  }
}

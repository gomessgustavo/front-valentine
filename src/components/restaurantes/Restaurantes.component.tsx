import { useEffect, useState } from "react";
import {
  BotaoContainer,
  RestaurantesContainer,
  RestaurantesSorteioContainer,
  RestauranteListaContainer,
  RestauranteFiltro,
  BotaoFiltro,
  RestauranteCard,
  LabelFiltrosTexto,
} from "./Restaurantes.style";

import { LocalDb } from "../../backend/local-db";
import { Rating } from "react-simple-star-rating";
import { RestauranteEntity } from "../../backend/entities/Restaurante.entity";
import { RestauranteDbEntity } from "../../backend/entities/RestauranteDb.entity";

export const Restaurantes = () => {
  const [render, setRender] = useState("RESTAURANTES");
  const [formCampos, setFormCampos] = useState<RestauranteEntity>({
    nomeRestaurante: "",
    cidade: "",
    comida: 0,
    atendimento: 0,
    ambiente: 0,
    precoMedio: 0,
  });

  const [filtroCampos, setFiltroCampos] = useState({
    nomeRestaurante: "",
    cidade: "",
    minComida: 0,
    maxComida: 5,
    minAmbiente: 0,
    maxAmbiente: 5,
    minAtendimento: 0,
    maxAtendimento: 500,
    minValor: 0,
    maxValor: 5000,
  });
  const [restaurantes, setRestaurantes] = useState<RestauranteDbEntity[]>([]);
  const [filtroAberto, setFiltroAberto] = useState(false);

  const getRestaurantes = async () => {
    const db = new LocalDb();
    const res = await db.getRestaurantes();
    setRestaurantes(res);
  };

  const getRestaurantesFiltrados = async () => {
    const db = new LocalDb();
    const res = await db.getRestaurantesFiltrados(filtroCampos);
    setRestaurantes(res);
  };

  useEffect(() => {
    if (render === "RESTAURANTES") {
      getRestaurantes();
    }
    // else {
    //   getGeneros();
    // }
  }, [render]);

  const changeForm = (valor: any, chave: string) => {
    setFormCampos((oldVal) => ({ ...oldVal, [chave]: valor }));
  };

  const submit = async (e: any) => {
    e.preventDefault();

    const db = new LocalDb();
    try {
      await db.inserirRestaurante(formCampos);
    } catch (e) {
      console.log(e);
      setRender("RESTAURANTES");
    }
  };

  const handleFiltro = async () => {
    if (filtroAberto) {
      await getRestaurantesFiltrados();
    }

    setFiltroAberto(!filtroAberto);
  };

  const filtroChange = (evento: any) => {
    const { value, name } = evento.target;
    setFiltroCampos((oldVal) => ({ ...oldVal, [name]: value }));
  };

  return (
    <RestaurantesContainer>
      <BotaoContainer>
        <button
          onClick={() =>
            setRender(render === "RESTAURANTES" ? "ADICIONAR" : "RESTAURANTES")
          }
        >
          {render === "RESTAURANTES" ? "Adicionar restaurante" : "Ver lista"}
        </button>
      </BotaoContainer>
      {render === "ADICIONAR" ? (
        <RestaurantesSorteioContainer onSubmit={submit}>
          <label>
            Nome do restaurante
            <input
              type="text"
              name="nomeRestaurante"
              value={formCampos.nomeRestaurante}
              onChange={({ target }) => changeForm(target.value, target.name)}
            />
          </label>
          <label>
            Cidade
            <input
              type="text"
              name="cidade"
              value={formCampos.cidade}
              onChange={({ target }) => changeForm(target.value, target.name)}
            />
          </label>
          <label>
            Comida
            <Rating
              allowFraction
              onClick={(val) => changeForm(val, "comida")}
            />
          </label>
          <label>
            Atendimento
            <Rating
              allowFraction
              onClick={(val) => changeForm(val, "atendimento")}
            />
          </label>
          <label>
            Ambiente
            <Rating
              allowFraction
              onClick={(val) => changeForm(Number(val), "ambiente")}
            />
          </label>
          <label>
            Valor médio
            <input
              type="number"
              value={formCampos.precoMedio}
              name="precoMedio"
              onChange={({ target }) => changeForm(target.value, target.name)}
            />
          </label>
          <button>Adicionar</button>
        </RestaurantesSorteioContainer>
      ) : (
        <RestauranteListaContainer>
          {filtroAberto && (
            <RestauranteFiltro>
              <LabelFiltrosTexto htmlFor="nomeRestaurante">
                <span>Nome restaurante</span>
                <input
                  type="text"
                  name="nomeRestaurante"
                  value={filtroCampos.nomeRestaurante}
                  onChange={filtroChange}
                />
              </LabelFiltrosTexto>
              <LabelFiltrosTexto htmlFor="cidade">
                <span>Cidade</span>
                <input
                  type="text"
                  name="cidade"
                  value={filtroCampos.cidade}
                  onChange={filtroChange}
                />
              </LabelFiltrosTexto>
              <div>
                <label>
                  Mínimo nota de comida
                  <input
                    type="number"
                    name="minComida"
                    value={filtroCampos.minComida}
                    onChange={filtroChange}
                  />
                </label>
                <label>
                  Máximo nota de comida
                  <input
                    type="number"
                    name="maxComida"
                    value={filtroCampos.maxComida}
                    onChange={filtroChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Mínimo nota de ambiente
                  <input
                    type="number"
                    name="minAmbiente"
                    value={filtroCampos.minAmbiente}
                    onChange={filtroChange}
                  />
                </label>
                <label>
                  Máximo nota de ambiente
                  <input
                    type="number"
                    name="maxAmbiente"
                    value={filtroCampos.maxAmbiente}
                    onChange={filtroChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Mínimo nota de atendimento
                  <input
                    type="number"
                    name="minAtendimento"
                    value={filtroCampos.minAtendimento}
                    onChange={filtroChange}
                  />
                </label>
                <label>
                  Máximo nota de atendimento
                  <input
                    type="number"
                    name="maxAtendimento"
                    value={filtroCampos.maxAtendimento}
                    onChange={filtroChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Mínimo valor
                  <input
                    type="number"
                    name="minValor"
                    value={filtroCampos.minValor}
                    onChange={filtroChange}
                  />
                </label>
                <label>
                  Máximo valor
                  <input
                    type="number"
                    name="maxValor"
                    value={filtroCampos.maxValor}
                    onChange={filtroChange}
                  />
                </label>
              </div>
            </RestauranteFiltro>
          )}
          <BotaoFiltro
            $bg={filtroAberto ? undefined : "#0000005b"}
            onClick={handleFiltro}
          >
            {filtroAberto ? "Filtrar" : "Abrir filtro"}
          </BotaoFiltro>
          {restaurantes.map((res) => (
            <RestauranteCard>
              <div>
                <h2>{res.nomeRestaurante}</h2>
              </div>
              <div>
                <h5>{res.cidade}</h5>
                <h5>R$ {res.precoMedio}</h5>
              </div>
              <div>
                <span>Comida</span>
                <Rating readonly initialValue={res.comida} />
              </div>
              <div>
                <span>Ambiente</span>
                <Rating readonly initialValue={res.ambiente} />
              </div>
              <div>
                <span>Atendimento</span>
                <Rating readonly initialValue={res.atendimento} />
              </div>
            </RestauranteCard>
          ))}
        </RestauranteListaContainer>
      )}
    </RestaurantesContainer>
  );
};

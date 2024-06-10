import { useCallback, useEffect, useState } from "react";
import {
  BotaoContainer,
  CheckboxContainer,
  FilmesContainer,
  FilmesSorteioContainer,
  ItemLista,
  ListaFilmes,
  CheckboxInput,
  FilmeSorteadoContainer,
  FiltroNotas,
} from "./Filmes.style";
import {
  FilmesDbEntity,
  FilmesStatusEnum,
} from "../../backend/entities/FilmesDb.entity";
import { LocalDb } from "../../backend/local-db";
import { MapperFilmesEnum } from "../../mappers/MapperFilmesEnum";
import { GenerosFilmesEntity } from "../../backend/entities/Generos.entity";
import { Api } from "../../backend/api";
import { FilmesResponseEntity } from "../../backend/entities/FilmesResponse.entity";

export const Filmes = () => {
  const [filmesArr, setFilmesArr] = useState<FilmesDbEntity[]>([]);
  const [generosFilmes, setGenerosFilmes] = useState<GenerosFilmesEntity[]>([]);
  const [generosSelecionados, setGenerosSelecionados] = useState<number[]>([]);
  const [render, setRender] = useState("FILMES");
  const [valoresFiltro, setValoresFiltros] = useState({
    minNota: undefined,
    minMedia: undefined,
  });
  const [filmeSorteado, setFilmeSorteado] = useState<FilmesResponseEntity>();

  const getFilmes = async () => {
    const db = new LocalDb();
    const res = await db.getFilmes();
    setFilmesArr(res);
  };

  const getGeneros = async () => {
    const api = new Api();
    const res = await api.buscarGeneros();
    setGenerosFilmes(res);
  };

  const atualizarFilme = useCallback(
    async (filme: FilmesDbEntity, evento: any) => {
      const db = new LocalDb();
      await db.atualizarFilme({
        ...filme,
        status: evento.target.value as FilmesStatusEnum,
      });

      await getFilmes();
    },
    []
  );

  useEffect(() => {
    if (render === "FILMES") {
      getFilmes();
    } else {
      getGeneros();
    }
  }, [render]);

  const sortearFilme = async () => {
    const api = new Api();
    const res = await api.buscarFilmes(
      generosSelecionados,
      valoresFiltro.minMedia,
      valoresFiltro.minNota
    );

    setFilmeSorteado(res[Math.floor(Math.random() * res.length)]);
  };

  const selectCheckbox = (evento: any) => {
    const { value, checked } = evento.target;
    if (checked) {
      setGenerosSelecionados([...generosSelecionados, Number(value)]);
    } else {
      setGenerosSelecionados((oldVal) =>
        oldVal.filter((val) => val !== Number(value))
      );
    }
  };

  const alterarFiltro = (evento: any) => {
    const { value, name } = evento.target;
    setValoresFiltros((oldVal) => ({ ...oldVal, [name]: value }));
  };

  const salvarFilme = async () => {
    const localDb = new LocalDb();
    await localDb.inserirFilme(filmeSorteado?.title || "");
  };

  const getChecked = (id: number): boolean => {
    return generosSelecionados.includes(id);
  };

  return (
    <FilmesContainer>
      <BotaoContainer>
        <button
          onClick={() => setRender(render === "FILMES" ? "MENU" : "FILMES")}
        >
          {render === "FILMES" ? "Trocar para sorteio" : "Ver lista"}
        </button>
      </BotaoContainer>
      {render === "MENU" ? (
        <FilmesSorteioContainer>
          <FiltroNotas>
            <input
              type="number"
              placeholder="Minimo média de nota"
              name="minMedia"
              value={valoresFiltro.minMedia}
              onChange={alterarFiltro}
            />
            <input
              type="number"
              placeholder="Mínimo de votos"
              name="minNota"
              value={valoresFiltro.minNota}
              onChange={alterarFiltro}
            />
          </FiltroNotas>
          <CheckboxContainer>
            {generosFilmes.length > 0 &&
              generosFilmes.map((gen) => (
                <CheckboxInput
                  className={getChecked(gen.id) ? "checked-checkbox" : ""}
                >
                  <input
                    type="checkbox"
                    checked={getChecked(gen.id)}
                    key={gen.id}
                    value={gen.id}
                    onChange={(e) => selectCheckbox(e)}
                  />
                  {gen.name}
                </CheckboxInput>
              ))}
          </CheckboxContainer>
          <BotaoContainer>
            <button onClick={sortearFilme}>Sortear</button>
          </BotaoContainer>
          {filmeSorteado && (
            <FilmeSorteadoContainer>
              <h6>{filmeSorteado.title}</h6>
              <p>{filmeSorteado.overview}</p>
              <button onClick={salvarFilme}>Adicionar</button>
            </FilmeSorteadoContainer>
          )}
        </FilmesSorteioContainer>
      ) : (
        <ListaFilmes>
          {filmesArr.length > 0 &&
            filmesArr.map((filme) => (
              <ItemLista key={filme.id}>
                <span>{filme.nome}</span>
                <select
                  value={filme.status}
                  onChange={(evento) => atualizarFilme(filme, evento)}
                >
                  {Object.keys(FilmesStatusEnum).map((val, index) => (
                    <option key={index} value={val}>
                      {MapperFilmesEnum.toLabel(val as FilmesStatusEnum)}
                    </option>
                  ))}
                </select>
              </ItemLista>
            ))}
        </ListaFilmes>
      )}
    </FilmesContainer>
  );
};

import {
  Botao,
  Conteudo,
  ConteudoAbsolute,
  ConteudoContainer,
  ConteudoMensagem,
  LetraMensagem,
} from "./Conteudo.style";
import { LocalDb } from "../../backend/local-db";
import { Modal } from "../../components/modal/Modal.component";
import { CoisaQueAmoEntity } from "../../backend/entities/CoisasQueAmo.entity";
import { useState } from "react";
import { FilmesContainer } from "../../components/filmes/Filmes.style";
import { Filmes } from "../../components/filmes/Filmes.component";
import { Fotos } from "../../components/fotos/Fotos.component";

export const Home = () => {
  const [msg, setMsg] = useState<CoisaQueAmoEntity>(
    new CoisaQueAmoEntity(0, "", false)
  );

  const [modalAberto, setModalAberto] = useState(false);
  const [modalFilmesAberto, setModalFilmesAberto] = useState(false);
  const [modalFotosAberto, setModalFotosAberto] = useState(false);

  const getCoisaQueAmo = async () => {
    setModalAberto(true);
    const localDb = new LocalDb();
    const item = await localDb.getCoisaQueAmo();

    setMsg(item);
    // if (!item.visto) {
    //   await localDb.atualizarCoisaQueAmo(item);
    // }
  };

  return (
    <ConteudoContainer>
      <Modal
        width="auto"
        height="auto"
        estaAberto={modalAberto}
        fecharModal={() => setModalAberto(false)}
      >
        <ConteudoMensagem>
          <LetraMensagem>{msg.frase}</LetraMensagem>
        </ConteudoMensagem>
      </Modal>
      <Modal
        width="50%"
        height="70vh"
        estaAberto={modalFilmesAberto}
        fecharModal={() => setModalFilmesAberto(false)}
      >
        {modalFilmesAberto ? <Filmes /> : <div></div>}
      </Modal>
      <Modal
        width="100%"
        height="70vh"
        estaAberto={modalFotosAberto}
        heightConteudo="auto"
        fecharModal={() => setModalFotosAberto(false)}
      >
        {modalFotosAberto ? <Fotos /> : <div></div>}
      </Modal>
      <ConteudoAbsolute>
        <Conteudo>
          <Botao onClick={getCoisaQueAmo}>Coisas que amo em você</Botao>
          <Botao onClick={() => setModalFotosAberto(true)}>Álbum</Botao>
          <Botao onClick={() => setModalFilmesAberto(true)}>Filmes</Botao>
        </Conteudo>
      </ConteudoAbsolute>
    </ConteudoContainer>
  );
};

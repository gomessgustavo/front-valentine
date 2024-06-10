import { ReactElement } from "react";
import { BotaoFechaModal, ModalContainer, ModalConteudo } from "./Modal.style";
import { XCircle } from "react-feather";

interface PropsChildren {
  children: ReactElement;
  estaAberto: boolean;
  fecharModal?: () => void;
  width: string;
  height: string;
  heightConteudo?: string;
}

export const Modal = ({
  children,
  estaAberto,
  fecharModal,
  width,
  height,
  heightConteudo,
}: PropsChildren) => {
  return (
    <ModalContainer visivel={estaAberto} $height={height} $width={width}>
      <ModalConteudo $height={heightConteudo}>
        {children}
        <BotaoFechaModal onClick={fecharModal}>
          <XCircle />
        </BotaoFechaModal>
      </ModalConteudo>
    </ModalContainer>
  );
};

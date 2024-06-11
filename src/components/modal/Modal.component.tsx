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
  padding?: string;
}

export const Modal = ({
  children,
  estaAberto = false,
  fecharModal,
  width,
  height,
  heightConteudo,
  padding,
}: PropsChildren) => {
  return estaAberto ? (
    <ModalContainer $height={height} $width={width}>
      <ModalConteudo $height={heightConteudo} $padding={padding}>
        {children}
        <BotaoFechaModal onClick={fecharModal}>
          <XCircle />
        </BotaoFechaModal>
      </ModalConteudo>
    </ModalContainer>
  ) : (
    <div style={{ display: "none" }}></div>
  );
};

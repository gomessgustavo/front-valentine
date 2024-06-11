import styled from "styled-components";

export interface ModalProps {
  $width: string;
  $height: string;
  bg?: string;
}

export const ModalContainer = styled.div<ModalProps>`
  position: absolute;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  max-height: 70vh;
  overflow: auto;
  z-index: 5;
  background: white;
  border-radius: 5px;
  background: ${(props) => props.bg ?? "#6c0000"};
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;

  @media (max-width: 450px) {
    max-height: 100vh;
    height: 100vh;
    width: 100%;
  }
`;

export const ModalConteudo = styled.div<{
  $height?: string;
  $padding?: string;
}>`
  position: relative;
  width: 100%;
  height: ${(props) => props.$height ?? "100%"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: ${(props) => props.$padding ?? "50px"};
  color: white;
`;

export const BotaoFechaModal = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  margin: 0;
  border: 0;
  cursor: pointer;
  color: white;
  margin: 20px;
  transition: 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

import styled from "styled-components";

export const ConteudoContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: none;
`;

export const ConteudoAbsolute = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 2;

  @media (max-width: 450px) {
    /* justify-content: flex-end; */
  }
`;

export const Conteudo = styled.div`
  position: relative;
  width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 450px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Botao = styled.button`
  outline: none;
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
  width: 275px;
  height: 60px;
  color: white;
  font-weight: bold;
  background: #0000005b;
  border: 0;
  font-size: 22px;
  font-family: "Satisfy";
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
      rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
      rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    transform: scale(1.06);
  }
`;

export const ConteudoMensagem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const LetraMensagem = styled.h4`
  font-size: 30px;
  font-weight: 100;
  font-family: "Satisfy";
`;

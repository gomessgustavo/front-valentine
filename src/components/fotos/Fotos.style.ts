import styled from "styled-components";

export const FotosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Polaroid = styled.div`
  background: #fff;
  padding: 1rem;
  box-shadow: 0 0.2rem 1.2rem rgba(0, 0, 0, 0.2);
  font-family: "Satisfy", "Montserrat";
  margin: 10px 0;

  img {
    width: 100%;
    height: auto;

    @media (max-width: 450px) {
      width: auto;
      max-width: 100%;
    }
  }

  div {
    font-size: 1.8rem;
    text-align: center;
    line-height: 2em;
    color: black;
    word-wrap: break-word;
    width: 100%;

    @media (max-width: 450px) {
      font-size: 15px;
      line-height: 1.5em;
    }
  }
`;

export const FotoImg = styled.img``;

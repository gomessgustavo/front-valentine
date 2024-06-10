import styled from "styled-components";

export const FilmesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: "Montserrat";
`;

export const ListaFilmes = styled.ul`
  padding-inline-start: 0;
  display: flex;
  flex-direction: column;
`;

export const ItemLista = styled.li`
  display: flex;
  font-weight: 300;
  font-size: 19px;
  font-family: "Satisfy";
  flex-direction: row;
  justify-content: space-between;
  margin: 5px;
  align-items: center;

  span {
    margin: 0 10px 0 0;
  }

  select {
    padding: 5px;
    background: none;
    color: white;
    border-radius: 2px;
    font-weight: 600;
  }
`;

export const FilmesSorteioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .checked-checkbox {
    background: #450101;
    border: 1.5px solid white;
  }
`;

export const FiltroNotas = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  input {
    padding: 5px;
    width: 50%;
  }
`;

export const BotaoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    outline: none;
    border-radius: 5px;
    margin: 10px;
    padding: 20px;
    width: auto;
    height: 60px;
    color: white;
    font-weight: bold;
    background: #0000005b;
    border: 0;
    font-size: 17px;
    font-family: "Montserrat";
    cursor: pointer;
    transition: 0.5s;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 10px;
`;

export const CheckboxInput = styled.label`
  width: 40%;
  display: flex;
  margin: 2px;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 5px;
  border-radius: 2px;
  border: 1.5px solid #6c0000;
  cursor: pointer;

  input {
    appearance: none;
  }
`;

export const FilmeSorteadoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h6 {
    font-size: 16px;
  }

  button {
    outline: none;
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
    width: auto;
    height: 40px;
    color: white;
    font-weight: bold;
    background: #095000;
    border: 0;
    font-size: 15px;
    font-family: "Montserrat";
    cursor: pointer;
    transition: 0.5s;
  }
`;

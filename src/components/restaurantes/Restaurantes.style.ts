import styled from "styled-components";

export const RestaurantesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: "Montserrat";
`;

export const RestauranteListaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BotaoFiltro = styled.button<{ $bg?: string }>`
  outline: none;
  border-radius: 5px;
  margin: auto;
  padding: 10px;
  width: auto;
  height: 40px;
  color: white;
  font-weight: bold;
  background: ${(props) => props.$bg ?? "#095000"};
  border: 0;
  font-size: 15px;
  font-family: "Montserrat";
  cursor: pointer;
  transition: 0.5s;
`;

export const LabelFiltrosTexto = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  input {
    width: 80%;
    padding: 1px;
  }
`;

export const RestauranteFiltro = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 10px;

    label > input {
      width: 70%;
    }
  }
`;

export const RestaurantesSorteioContainer = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 10px auto;
    width: 100%;

    input {
      margin-top: 5px;
      width: 100%;
      padding: 3px;
    }
  }

  button {
    outline: none;
    border-radius: 5px;
    margin: auto;
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

export const RestaurantesorteadoContainer = styled.div`
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
export const RestauranteCard = styled.div`
  margin: 5px;
  /* border: 2px solid black; */
  background: rgba(255, 255, 255, 0.17);
  border-radius: 5px;
  width: 100%;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    width: 100%;

    h2 {
      font-size: 20px;
      font-weight: bold;
    }

    h5 {
      font-size: 15px;
    }
  }
`;

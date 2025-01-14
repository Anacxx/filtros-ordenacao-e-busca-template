import React from "react";
import { Container } from "./styles";

const Header = ({buscaId,onChangeBuscaId,buscaNome,onChangeBuscaNome}) => {
  const pokemontypesArray = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Flying",
    "Fighting",
    "Poison",
    "Electric",
    "Ground",
    "Rock",
    "Psychic",
    "Ice",
    "Bug",
    "Ghost",
    "Steel",
    "Dragon",
    "Dark",
    "Fairy",
  ];

  return (
    <Container>
      <input
      value={buscaId}
      onChange={onChangeBuscaId} 
      type="number" 
      placeholder="Buscar por id" 
      />
      <input
       type="text" 
       placeholder="Buscar por nome" 
       value={buscaNome}
       onChange={onChangeBuscaNome}
       />
      <select>
        <option value="">Ordenar</option>
        <option value="">Crescente</option>
        <option value="">Decrescente</option>
      </select>
      <select name="tipo" id="tipo">
        <option value="">Selecione um tipo</option>
        {pokemontypesArray.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default Header;

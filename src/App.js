import styled, { createGlobalStyle } from "styled-components";
import pokemons from "./pokemon/pokemon.json";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getColors } from "./utils/ReturnCardColor";
import Header from "./components/Header/Header.js";
import { useState } from "react";
const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
`;
function App() {
  const [buscaId, setBuscaId]= useState('')
  const onChangeBuscaId = (event) => {
    setBuscaId(event.target.value)
  }
  const [buscaNome, setBuscaNome]= useState('')
  const onChangeBuscaNome= (event) => {
    setBuscaNome(event.target.value)
  }
  return (
    <>
      <GlobalStyle />
      <Header 
      buscaId ={buscaId}
      onChangeBuscaId = {onChangeBuscaId}
      buscaNome ={buscaNome}
      onChangeBuscaNome = {onChangeBuscaNome}
      />
      <CardsContainer>
        {pokemons
          .filter((pokemon) =>{
            if(buscaId && pokemon.id == buscaId){
              return pokemon;
            }else if (!buscaId){
              return pokemon;
            }
          })
          .filter((pokemon) => {
            if(buscaNome && pokemon.name.english.toLowerCase().includes(buscaNome.toLowerCase())){
              return pokemon;
            }else if (!buscaNome){
              return pokemon;
            }
          })
          .map((pokemon) => {
            return <PokemonCard
            cardColor={getColors(pokemon.type[0])}
            key={pokemon.id}
            pokemon={pokemon}
        />
        })}
      </CardsContainer>
    </>
  );
}

export default App;

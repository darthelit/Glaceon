import React from 'react';
import { useRecoilState } from 'recoil';
import { pokemonState } from '../recoil/PokemonState';

const ViewPokemon = (props) => {
  const [currentPokemon, setCurrentPokemon] = useRecoilState(pokemonState);
};

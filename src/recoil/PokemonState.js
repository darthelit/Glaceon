import { atom } from 'recoil';
const pokemonState = atom({
  key: 'currentPokemon',
  default: {},
});

export { pokemonState };

export default {
  pokemonState,
};

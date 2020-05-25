import Dispatcher from '../Dispatcher';
import {
  FETCH_POKEMON,
  UPDATE_POKEMON,
  FETCH_POKEMON_BY_ID,
  UPDATE_CURRENT_POKEMON,
} from '../../util/Constants';
import GlaceonSource from './GlaceonSource';

const GlaceonActions = {
  fetchPokemonByGen(pokemon) {
    Dispatcher.dispatch({
      type: FETCH_POKEMON,
    });
    GlaceonSource.fetchPokemonByGen(this.updatePokemon);
  },
  fetchPokemonById(pokemonId) {
    Dispatcher.dispatch({
      type: FETCH_POKEMON_BY_ID
    });
    GlaceonSource.fetchPokemonById(pokemonId, this.updateCurrentPokemon)
  },
  updatePokemon(pokemon) {
    Dispatcher.dispatch({
      type: UPDATE_POKEMON,
      pokemon
    });
  },
  updateCurrentPokemon(pokemon) {
    Dispatcher.dispatch({
      type: UPDATE_CURRENT_POKEMON,
      pokemon
    })
  }
};

export default GlaceonActions;
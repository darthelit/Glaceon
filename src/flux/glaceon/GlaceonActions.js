import Dispatcher from '../Dispatcher';
import {
  FETCH_POKEMON,
  UPDATE_POKEMON
} from '../../util/Constants';
import GlaceonSource from './GlaceonSource';

const GlaceonActions = {
  fetchPokemonByGen(pokemon) {
    Dispatcher.dispatch({
      type: FETCH_POKEMON,
    });
    GlaceonSource.fetchPokemonByGen(this.updatePokemon);
  },
  updatePokemon(pokemon) {
    Dispatcher.dispatch({
      type: UPDATE_POKEMON,
      pokemon
    });
  }
};

export default GlaceonActions;
import Dispatcher from '../Dispatcher';
import {
  FETCH_POKEMON,
  UPDATE_POKEMON
} from '../../util/Constants';
import GlaceonSource from './GlaceonSource';

const GlaceonActions = {
  fetchPokemon(pokemon) {
    Dispatcher.dispatch({
      type: FETCH_POKEMON,
    });
    GlaceonSource.fetchPokemon(pokemon, this.updatePokemon);
  },
  updatePokemon(pokemon) {
    Dispatcher.dispatch({
      type: UPDATE_POKEMON,
      pokemon
    });
  }
};

export default GlaceonActions;
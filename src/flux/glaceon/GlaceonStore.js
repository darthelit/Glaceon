import { fromJS } from 'immutable';
import { ReduceStore } from 'flux/utils';
import Dispatcher from '../Dispatcher';
import {
  FETCH_POKEMON,
  UPDATE_POKEMON
} from '../../util/Constants';

class GlaceonStore extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    const initialState = fromJS({
      pokemon: [],
      isLoading: true
    });
    return initialState;
  }

  reduce(state, action) {
    switch (action.type) {
      case FETCH_POKEMON:
        return state.set('isLoading', true);
      case UPDATE_POKEMON:
        state = state.set('isLoading', false);
        return state.set('pokemon', action.pokemon);
      default:
        return state;
    }
  };
}

export default new GlaceonStore();
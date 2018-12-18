import React, { Component } from 'react';
import { Container } from 'flux/utils';
import { css } from 'react-emotion';
import GlaceonStore from '../flux/glaceon/GlaceonStore';
import GlaceonActions from '../flux/glaceon/GlaceonActions';
import util from '../util/Util';
import Loading from '../components/Loading';

const container = css`
  height: 100%;
`;

class ViewPokemonContainer extends Component {
  static getStores() {
    return [
      GlaceonStore
    ];
  }

  static calculateState() {
    return {
      ...GlaceonStore.getState().toJS()
    }
  }

  componentDidMount() {
    if(util.isEmpty(this.state.currentPokemon)) {
      GlaceonActions.fetchPokemonById(this.props.match.params.pokemonId)
    }
  }

  render() {
    if(this.state.isLoading) {
      return (<Loading />)
    }
    return (
    <div className={container}>
      <span>
        {JSON.stringify(this.state.currentPokemon, null, 2)}
      </span>
    </div>
    )
  }
};

export default Container.create(ViewPokemonContainer);
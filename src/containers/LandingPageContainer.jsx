import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
import { Container } from 'flux/utils';
import GlaceonActions from '../flux/glaceon/GlaceonActions';
import GlaceonStore from '../flux/glaceon/GlaceonStore';
import Pokemon from '../components/Pokemon';
import GlaceonSource from '../flux/glaceon/GlaceonSource';
import util from '../util/Util';

const loaderOverride = css`
  top: 50%;
  right: 50%;
  position: absolute
`;

class LandingPageContainer extends Component {
  static getStores() {
    return [
      GlaceonStore
    ];
  }

  static calculateState() {
    return {
      ...GlaceonStore.getState().toJS(),
      fetchPokemon: GlaceonActions.fetchPokemon
    };
  }

  componentDidMount() {
    GlaceonSource.fetchPokemonData();
  }

  render() {
    if(this.state.isLoading) {
      return (
        <div id="loading">
          <div class="pokeball" id="normal"></div>
          <div class="pokeball" id="great"></div>
          <div class="pokeball" id="ultra"></div>
          <div class="pokeball" id="master"></div>
          <div class="pokeball" id="safari"></div>
        </div>
)
    }
    return (
      <div className="home">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                POKEMON!!!
              </h1>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Container.create(LandingPageContainer);
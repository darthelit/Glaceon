import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { Container } from 'flux/utils';
import { ProgressBar } from 'primereact/progressbar';
import GlaceonActions from '../flux/glaceon/GlaceonActions';
import GlaceonStore from '../flux/glaceon/GlaceonStore';
import Pokemon from '../components/Pokemon';
import GlaceonSource from '../flux/glaceon/GlaceonSource';
import util from '../util/Util';

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
    GlaceonSource.fetchPokemonData()
      .then(resp => {
        GlaceonActions.fetchPokemon(resp.data.results);
      })
  }

  render() {
    if(this.state.isLoading) {
      return (<progress class="progress is-large is-info" max="100">60%</progress>)
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
        <Pokemon pokemon={this.state.pokemon} />
      </div>
    )
  }
}

export default Container.create(LandingPageContainer);
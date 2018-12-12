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
    GlaceonSource.fetchPokemonData()
      .then(() => {
        return GlaceonActions.fetchPokemonByGen();
      });
  }

  generateOptions(pokeData) {
    const opts = (pokeData.map(mon => (
      <a href="#" className="dropdown-item">{util.capitalizeFirstLetter(mon.name)}</a>
      // <option key={mon.id} value={mon.url}>{util.capitalizeFirstLetter(mon.name)}</option>
    )));
    return opts;
  }

  getGenerationDropDowns(pokeData) {
    const genData = [];
    const ddls = pokeData.map(gen => {
      return (
        <div id={`${gen.name}-dropdown`} className="dropdown">
          <div className="dropdown-trigger">
            <button className="button" aria-haspopup="true" aria-controls="dropdown-menu3" onClick={() => document.getElementById(`${gen.name}-dropdown`).classList.toggle('is-active')}>
              <span>{util.capitalizeFirstLetter(gen.name)}</span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id={`${gen.name}-dropdown-menu`} role="menu">
            <div className="dropdown-content">
              {this.generateOptions(gen.pokemon)}
            </div>
          </div>
        </div>
      )
    });
    return ddls;
  }

  render() {
    if(this.state.isLoading) {
      return (
        <div id="loading">
          <div className="pokeball" id="normal"></div>
          <div className="pokeball" id="great"></div>
          <div className="pokeball" id="ultra"></div>
          <div className="pokeball" id="master"></div>
          <div className="pokeball" id="safari"></div>
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
              {this.getGenerationDropDowns(this.state.pokemon)}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Container.create(LandingPageContainer);
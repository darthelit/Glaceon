import React, { Component } from 'react';
import { Container } from 'flux/utils';
import { css } from 'react-emotion';
import {orderBy as _orderBy, filter as _filter } from 'lodash';
import GlaceonStore from '../flux/glaceon/GlaceonStore';
import GlaceonActions from '../flux/glaceon/GlaceonActions';
import util from '../util/Util';
import Loading from '../components/Loading';

const container = css`
  height: 100%;
`;

class ViewPokemonContainer extends Component {
  constructor(props) {
    super(props);
    this.getMoveDropDown = this.getMoveDropDown.bind(this);
  }
  static getStores() {
    return [GlaceonStore];
  }

  static calculateState() {
    return {
      ...GlaceonStore.getState().toJS(),
    };
  }

  generateOptions(moves) {
    const sortedMoves = _orderBy(moves, ['move.name'], ['asc']);
    const opts = (sortedMoves.map(move => (
      <a id={move.move.id}
      // href={`${this.props.match.url}/moves/${move.id}`}
      href="#"
      className='dropdown-item'
      // onClick={() => GlaceonActions.fetchMoveById(move.id)}
      >
        {util.capitalizeFirstLetter(move.move.name)}
      </a>
    )));
    return opts;
  }

  getMoveDropDown(moves) {
    return (
      <div id={`move-dropdown`} className="dropdown" style={{ verticalAlign: 'middle' }}>
        <div className="dropdown-trigger">
          <button className="button" aria-haspopup="true" aria-controls="dropdown-menu3" onClick={() => document.getElementById(`move-dropdown`).classList.toggle('is-active')}>
            <span>Moves</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id={`move-dropdown-menu`} role="menu">
          <div className="dropdown-content dropdown-scroll">
            {this.generateOptions(moves)}
          </div>
        </div>
      </div>
    )
  };

  getSprites(sprites) {
    const spriteArray = [];
    for (let [key, value] of Object.entries(sprites)) {
      spriteArray.push(<img src={value} alt={key} style={{ verticalAlign: 'middle' }} />)
    }
    return spriteArray;
  }

  componentDidMount() {
    if (util.isEmpty(this.state.currentPokemon)) {
      GlaceonActions.fetchPokemonById(this.props.match.params.pokemonId);
    }
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }
    return (
      <div className="container">
        <h1 className="title">{util.capitalizeFirstLetter(this.state.currentPokemon.name)}</h1>
        {this.getSprites(this.state.currentPokemon.sprites)}
        <br />
        <p style={{ textDecoration: 'underline'}}>Types</p>
        {this.state.currentPokemon.types.map(type=> (
          <img style={{ paddingLeft: 5 }} src={`/images/${type.type.name}.gif`} alt={type.type.name} />
        ))}
        <p style={{ textDecoration: 'underline'}}>Base Stats</p>
        {this.state.currentPokemon.stats.map(stat => (
          <>
          <p>{stat.stat.name}: {stat.base_stat}</p>
          </>
        ))}
        {this.getMoveDropDown(this.state.currentPokemon.moves)}
        <div className="column is-desktop">
        <h2 class="subtitle">Podex Entries</h2>
          {_filter(this.state.currentPokemon.species.flavor_text_entries, ['language.name', 'en']).map(entry => (
            <div className="card">
              <div className="card-content">
                <p className="title">
                  {entry.flavor_text}
                </p>
                <p className="subtitle">
                {entry.version.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Container.create(ViewPokemonContainer);

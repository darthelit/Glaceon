import React from 'react';
import { Link } from 'react-router-dom';
import { css } from 'react-emotion';
import util from '../util/Util';

const poke = css`
  margin-left: 3%;
`

const container = css`
  max-width: 97%;
  display: inline-flex;
  flex-wrap: wrap;
`

const Pokemon = props => {
  const mons = props.pokemon.map( mon => (
    <div className={poke}>
      <Link to={`/view/${mon.id}`}><img src={mon.sprites.front_default} alt={mon.name}/></Link>
      <h4>{util.capitalizeFirstLetter(mon.name)}</h4>
    </div>
  ));
  return (
    <div className={container}>
      {mons}
    </div>
  )
}

export default Pokemon;
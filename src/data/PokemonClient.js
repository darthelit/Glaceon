const Pokedex = require('pokeapi-js-wrapper');

const options = {
  protocol: 'https',
  hostName: 'pokeapi.co',
  versionPath: '/api/v2/',
  cache: true,
  timeout: 20 * 1000 //20s
}

let client;
const PokemonClient = () => {
  if (!client) {
    client = new Pokedex.Pokedex(options);
  }
  return client;
}

export {
  PokemonClient
};

export default PokemonClient;
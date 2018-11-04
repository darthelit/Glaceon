import axios from 'axios';

const GlaceonSource = {
  fetchPokemonData() {
    return axios.get('https://pokeapi.co/api/v2/pokemon/');
  },
  async fetchPokemon(pokemon, success) {
    const pokes = pokemon.map(pokemon => {
      return axios.get(pokemon.url);
    });

    const data = await axios.all(pokes);

    const mons = data.map(mon => {
      return mon.data;
    })

    success(mons);
  }
}

export default GlaceonSource;
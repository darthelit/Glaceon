import axios from 'axios';
import { PokemonClient } from '../../data/PokemonClient';
import util from '../../util/Util';

const GlaceonSource = {
  fetchPokemonData() {
    return axios.get('https://pokeapi.co/api/v2/pokemon/');
  },
  async fetchPokemon(pokemon, success) {
    const pokes = pokemon.map((pokemon) => {
      return axios.get(pokemon.url);
    });

    const data = await axios.all(pokes);

    const mons = data.map((mon) => {
      return mon.data;
    });

    success(mons);
  },
  fetchPokemonByGen(success) {
    PokemonClient()
      .resource([
        '/api/v2/generation/1/',
        '/api/v2/generation/2/',
        '/api/v2/generation/3/',
        '/api/v2/generation/4/',
        '/api/v2/generation/5/',
        '/api/v2/generation/6/',
        '/api/v2/generation/7/',
      ])
      .then((data) => {
        const gens = data.map((gen) => {
          return {
            name: gen.name,
            region: gen.main_region.name,
            pokemon: gen.pokemon_species,
            sortedPokemon: util.sortPokemonByNumber(gen.pokemon_species),
          };
        });
        success(gens);
      });
  },
  async fetchPokemonById(pokemonId, success) {
    const data = await PokemonClient().getPokemonByName(pokemonId);
    const formData = await PokemonClient().getPokemonFormByName(pokemonId);
    const species = await PokemonClient().getPokemonSpeciesByName(data.name);

    data.sprites = formData.sprites;
    data.species = species;
    success(data);
  },
};

export default GlaceonSource;

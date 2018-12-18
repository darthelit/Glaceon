
const util = {
  pokeNumSort(a,b) {
    return a.id - b.id;
  },
  valueIsTruePrimitive(obj) {
    return (typeof obj === 'string') || (typeof obj === 'number') || (typeof obj === 'boolean') || obj instanceof Date;
  },
  isEmpty(obj) {
    if ((obj === null) || (obj === undefined)) {
      return true;
    } else if (typeof obj === 'function') {
      return false;
    } else if (Array.isArray(obj) || (typeof obj === 'string')) {
      return obj.length === 0;
    } else if (!this.valueIsTruePrimitive(obj)) {
      return Object.keys(obj).length === 0;
    } else if (this.valueIsTruePrimitive(obj)) {
      return false;
    }
    return true;
  },
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },
  getPokemonNumFromUrl(pokemonData) {
    const pokemonNumArray = pokemonData.map(pokemon => {
      const pokemonId = Number(pokemon.url.split('/')[6])
      pokemon.id = pokemonId;
      return pokemon;
    });
    return pokemonNumArray;
  },
  sortPokemonByNumber(pokemonData) {
    this.getPokemonNumFromUrl(pokemonData);
    return pokemonData.sort(this.pokeNumSort);
  }
}

export default util;
import axios from 'axios';


async function getPokemonTypes() {
    const response = await axios.get('https://pokeapi.co/api/v2/type');
    const types = response.data.results;
    return types;
}

export { getPokemonTypes }
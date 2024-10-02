import axios from 'axios';

async function getPokemonList(offset) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${offset}`);

    const pokemonList = response.data.results;

    const pokemonDetailsPromises = pokemonList.map(async (pokemon) => {
        const detailsResponse = await axios.get(pokemon.url);
        const details = detailsResponse.data;

        return {
            name: details.name,
            id: details.id,
            image: details.sprites.front_default,
            types: details.types,
        };
    });
    
    const pokemonDetails = await Promise.all(pokemonDetailsPromises);
    
    return pokemonDetails;
}


export { getPokemonList }
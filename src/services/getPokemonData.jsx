import axios from "axios";

async function getPokemonData(pokemon) {

    const pokeData = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)).data;

    const prevPokemon = pokeData.id - 1
    const nextPokemon = pokeData.id + 1

    const abilitiesList = pokeData.abilities;

    const abilitiesPromises = abilitiesList.map(async (ability) => {
        const abilitiesResponse = (await axios.get(ability.ability.url)).data;

        const abilityNameArray = abilitiesResponse.names.filter(abilityName => abilityName.language.name === "en");
        const abilityEffectArray = abilitiesResponse.effect_entries.filter(abilityEffect => abilityEffect.language.name === "en");

        const abilityName = abilityNameArray.length > 0 ? abilityNameArray[0].name : "Unknown";
        const abilityEffect = abilityEffectArray.length > 0 ? abilityEffectArray[0].effect : "No effect available";

        return {
            name: abilityName,
            effect: abilityEffect
        }
    })

    const abilitiesDetails = await Promise.all(abilitiesPromises)

    const movesList = pokeData.moves;
    const movesPromises = movesList.map(async (move) => {
        const movesResponse = (await axios.get(move.move.url)).data;
        const moveTypeName = movesResponse.type.name

        return moveTypeName
    })

    const movesTypes = await Promise.all(movesPromises)

    return {
        prevPokemon: prevPokemon,
        nextPokemon: nextPokemon,
        name: pokeData.name,
        pokedexId: pokeData.id,
        frontImg: pokeData.sprites.front_default,
        frontShinyImg: pokeData.sprites.front_shiny,
        moves: pokeData.moves,
        movesTypes: movesTypes,
        abilities: abilitiesDetails,
        types: pokeData.types,
        stats: pokeData.stats,
    }
}

export { getPokemonData }
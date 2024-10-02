import { DetailsDiv } from "./style"
import { PokemonStats } from "./PokemonStats"
import { PokemonAbilities } from "./PokemonAbilities"
import { PokemonMoves } from "./PokemonMoves"

export const PokemonDetailsInfo = ({ pokeInfos }) => {
    return (
        <DetailsDiv className="pokemon-details">
            <PokemonStats pokeInfos={pokeInfos} />
            <PokemonAbilities pokeInfos={pokeInfos} />
            <PokemonMoves pokeInfos={pokeInfos} />
        </DetailsDiv>
    )
}


import "./style.css"
import { MainInfo, PokemonName, TypesDiv, TypesUl } from "./style"
import { ImagesContainer } from "./ImagesContainer"
import { NavButtons } from "./NavButtons"
import { useContext } from "react"
import { ThemeContext } from "./../../contexts/theme-toggler"


export const PokemonMainInfo = ({ pokeInfos, setPokeInfos }) => {
    const { theme } = useContext(ThemeContext)
    
    return (
        <MainInfo>
            <PokemonName theme={theme}>N° {pokeInfos.pokedexId}: {pokeInfos.name} </PokemonName>
            <TypesDiv className="pokemon-types">
                <TypesUl>
                    {pokeInfos.types.map((type, index) => (
                        <li key={index} className={`typecard ${type.type.name}`}>
                            <h4>{type.type.name}</h4>
                        </li>
                    ))}
                </TypesUl>
            </TypesDiv>
            <div>
                <ImagesContainer pokeInfos={pokeInfos} />
            </div>
            <NavButtons pokeInfos={pokeInfos} setPokeInfos={setPokeInfos} />
        </MainInfo>
    )
}
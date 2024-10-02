import { NavBtns, Button } from "./style"
import { getPokemonData } from "../../../services/getPokemonData"
import { useNavigate } from "react-router-dom"
import { ThemeTogglerButton } from "../../themeTogglerButton"
import { useContext, useState } from "react"
import { ThemeContext } from "../../../contexts/theme-toggler"

export const NavButtons = ({ pokeInfos, setPokeInfos }) => {
    const navigate = useNavigate();
    const { theme } = useContext(ThemeContext);
    const [isLoading, setIsLoading] = useState(false);
    const navigateToPokemon = async (type) => {
        setIsLoading(true);
        let newPokeData
        if (type === "prev") {
            pokeInfos.prevPokemon === 10000 ? pokeInfos.prevPokemon = 1025 : pokeInfos.prevPokemon
            newPokeData = await getPokemonData(pokeInfos.prevPokemon);
            setPokeInfos(newPokeData);
        } else if (type === "next") {
            pokeInfos.nextPokemon === 1026 ? pokeInfos.nextPokemon = 10001 : pokeInfos.nextPokemon
            newPokeData = await getPokemonData(pokeInfos.nextPokemon);
        }
        if (newPokeData) {
            navigate(`/pokemon-info/${newPokeData.name}`);
        }
        setIsLoading(false);
    }

    return (
        <NavBtns className="nav-btns">
            <Button
                onClick={() => navigateToPokemon("prev")}
                disabled={pokeInfos.prevPokemon === 0}
                theme={theme}>

                <p>{isLoading ? "Carregando..." :
                pokeInfos.prevPokemon === 0 ? "Pokémon anterior indisponível" : `Pokémon anterior: N° ${pokeInfos.prevPokemon}`}</p>
            </Button>

            <ThemeTogglerButton />

            <Button
                onClick={() => navigateToPokemon("next")}
                disabled={pokeInfos.nextPokemon === 10278}
                theme={theme}>

                <p>{isLoading ? "Carregando..." :
                pokeInfos.nextPokemon === 10278 ? "Próximo pokémon indisponível" : `Próximo pokémon: N° ${pokeInfos.nextPokemon}`}</p>
            </Button>
        </NavBtns>
    )
}


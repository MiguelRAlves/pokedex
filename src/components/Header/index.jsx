import { Title, StyledHeader, PokeballLogo } from "./style"
import pokeballLogo from "./../../assets/images/pokeball-icon.png"
import { useContext } from "react"
import { ThemeContext } from "./../../contexts/theme-toggler"

export const Header = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <StyledHeader>
            <PokeballLogo src={pokeballLogo} alt="Pokeball logo" />
            <Title theme={theme}>PokéList - Procure pelo seu pokémon favorito!</Title>
            <PokeballLogo src={pokeballLogo} alt="Pokeball logo" />
        </StyledHeader>
    )
}
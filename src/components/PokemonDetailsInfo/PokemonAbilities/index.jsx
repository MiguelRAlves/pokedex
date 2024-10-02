import { Abilities, AbilitiesDiv, Ability, Title, AbilityName, AbilityEffect } from "./style"
import { useContext } from "react"
import { ThemeContext } from "../../../contexts/theme-toggler"

export const PokemonAbilities = ({ pokeInfos }) => {
    const { theme } = useContext(ThemeContext)
    return (
        <Abilities className="pokemon-abilities">
            <Title theme={theme}>Habilidades</Title>
            <AbilitiesDiv>
                {pokeInfos.abilities.map((ability, index) => (
                    <Ability theme={theme} key={index}>
                        <AbilityName theme={theme}>{ability.name}</AbilityName>
                        <AbilityEffect theme={theme}>{ability.effect}</AbilityEffect>
                    </Ability>
                ))}
            </AbilitiesDiv>
        </Abilities>
    )
}
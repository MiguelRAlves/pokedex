import { Progress, InputDiv,  PokemonStatsDiv, Stat, StatName, StatValue, StatInfo, Title } from "./style"
import { useContext } from "react"
import { ThemeContext } from "../../../contexts/theme-toggler"

export const PokemonStats = ({ pokeInfos }) => {
    const { theme } = useContext(ThemeContext)

    return (
        <PokemonStatsDiv>
            <Title theme={theme}>Estatísticas</Title>
            <Stat>
                {pokeInfos.stats.map((stat, index) => (
                    <StatInfo key={index}>
                        <StatName theme={theme}>{stat.stat.name}</StatName>
                        <InputDiv>
                            <Progress id="slider"  max="255" value={stat.base_stat} />
                            <StatValue theme={theme} id="sliderValue">{stat.base_stat}</StatValue>
                        </InputDiv>

                    </StatInfo>
                ))}
            </Stat>
        </PokemonStatsDiv>
    )
}
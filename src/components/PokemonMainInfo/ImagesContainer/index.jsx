import { useContext } from "react"
import { ThemeContext } from "../../../contexts/theme-toggler"
import { Images, FrontImg, FrontShinyImg, ImageDescription } from "./style"

export const ImagesContainer = ({ pokeInfos }) => {
    const { theme } = useContext(ThemeContext)

    return (
        <Images>
            {pokeInfos.frontImg ? (
                <FrontImg>
                    <img src={pokeInfos.frontImg ? pokeInfos.frontImg : "Imagem indisponível"} alt={pokeInfos.frontImg ? `Foto do pokémon ${pokeInfos.name}` : "Imagem indisponível."} />
                    <ImageDescription theme={theme}>Foto do pokémon {pokeInfos.name}</ImageDescription>
                </FrontImg>)
                : (<p>Imagem indisponível</p>)}
            {pokeInfos.frontShinyImg ? (
                <FrontShinyImg>
                    <img src={pokeInfos.frontShinyImg ? pokeInfos.frontShinyImg : "Imagem indisponível"} alt={pokeInfos.frontShinyImg ? `Foto do pokémom ${pokeInfos.name} em sua versão shiny.` : "Imagem indisponível."} />
                    <ImageDescription theme={theme}>{pokeInfos.frontShinyImg ? `Foto do pokémon ${pokeInfos.name} em sua versão shiny.` : "Este pokémon não tem uma versão shiny."}</ImageDescription>
                </FrontShinyImg>)
                : (<p>Imagem indisponível</p>)}
        </Images>
    )
}
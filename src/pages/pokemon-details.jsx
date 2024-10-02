import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPokemonData } from "../services/getPokemonData";
import styled from "styled-components";
import { PokemonMainInfo } from "../components/PokemonMainInfo";
import { PokemonDetailsInfo } from "../components/PokemonDetailsInfo";
import { ThemeContext } from "../contexts/theme-toggler";
import pokemonWhiteBg from "./../assets/images/pokemon-white-bg.jpg";
import pokemonBlackBg from "./../assets/images/pokemon-black-bg.jpg";

export const PokemonDetails = () => {
    const { pokemon } = useParams();
    const navigate = useNavigate();
    const { theme } = useContext(ThemeContext);
    const [pokeInfos, setPokeInfos] = useState({
        abilities: [],
        types: [],
        moves: [],
        stats: [],
    });

    const Background = theme.backgroundColor === "#eeeeee" ? WhiteBackground : BlackBackground;

    const fetchData = async (pokemonName) => {
        const pokeData = await getPokemonData(pokemonName);
        setPokeInfos(pokeData);
    }

    try {
        useEffect(() => {
            fetchData(pokemon);
        }, [pokemon]);
    } catch (error) {
        console.log("Error fetching data", error)
    }

    return (
        <Background theme={theme}>
            <div>
                <PokemonMainInfo pokeInfos={pokeInfos} setPokeInfos={setPokeInfos} />
                <PokemonDetailsInfo pokeInfos={pokeInfos} />
            </div>
            <ReturnButtonDiv theme={theme}>
                <button onClick={() => navigate("/")}>Voltar à Lista</button>
            </ReturnButtonDiv>
        </Background>
    )
}

const WhiteBackground = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    background-image: url(${pokemonWhiteBg});
    background-size: cover;
    background-repeat: no-repeat;
    
`

const BlackBackground = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    background-image: url(${pokemonBlackBg});
    background-size: cover;
    background-repeat: no-repeat;
`

const ReturnButtonDiv = styled.div`
    display: flex;
    align-self: center;

    min-width: 200px;
    padding-bottom: 50px;

    > button {
    width: 100%;
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    }
`
import { useEffect, useState, useContext } from "react";
import { getPokemonList } from "../services/getPokemonList";
import { getPokemonTypes } from "../services/getPokemonTypes";
import { CardsList } from "../components/CardsList";
import styled from "styled-components";

import { ThemeTogglerButton } from "../components/themeTogglerButton"
import { ThemeContext } from "../contexts/theme-toggler"

import pokemonWhiteBg from "./../assets/images/pokemon-white-bg.jpg"
import pokemonBlackBg from "./../assets/images/pokemon-black-bg.jpg"

export const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const [pokeData, setPokeData] = useState([]);
    const [types, setTypes] = useState([]);

    const { theme } = useContext(ThemeContext);
    const Background = theme.backgroundColor === "#eeeeee" ? WhiteBackground : BlackBackground;

    const [search, setSearch] = useState('');
    const [pokemonType, setPokemonType] = useState('all');

    const lowerSearch = search.toLowerCase();
    const pokemonFilter = pokeData.filter((pokemon) => {
        const matchesName = pokemon.name.toLowerCase().includes(lowerSearch);
        const matchesType = pokemonType === 'all' || pokemon.types.some((type) => type.type.name === pokemonType);
        return matchesName && matchesType;
    });

    useEffect(() => {
        setIsLoading(true)
        try {
            const fetchData = async () => {
                const pokemonListData = await getPokemonList(offset);
                setPokeData(pokemonListData);
                setOffset(offset + 50);
            }
            fetchData();

            const fetchTypes = async () => {
                const response = await getPokemonTypes();
                const types = response.map((type) => type.name);
                setTypes(types);
                console.log(types);
            }
            fetchTypes();
        }
        catch (error) {
            console.log("Error fetching data", error)
        }
        finally {
            setIsLoading(false)
        }
    }, [])

    const handleClick = async () => {
        const newPokeData = await getPokemonList(offset);
        setPokeData([...pokeData, ...newPokeData]);
        setOffset(offset + 50);
    }

    return (
        <Background className="bg-pokemon" theme={theme}>
            <Main theme={theme}>
                <SearchContainer className="title">
                    <Input type="text" placeholder="Procure pelo seu pokémon!" value={search} onChange={(e) => setSearch(e.target.value)} theme={theme} />
                    <ButtonsDiv>
                        <Select onChange={(e) => setPokemonType(e.target.value)} value={pokemonType}>
                            <Option value="all">Todos</Option>
                            {types.map((type) => (
                                <Option key={type} value={type}>
                                    {type}
                                </Option>
                            ))}
                        </Select>
                        <ThemeTogglerButton />
                    </ButtonsDiv>
                </SearchContainer>

                <CardsList pokemons={pokemonFilter} />
                
                <DivButton className="show-more">
                    <button onClick={handleClick}>
                        {isLoading ? 'Loading...' : 'Mostrar mais Pokémons'}
                    </button>
                </DivButton>
            </Main>
        </Background>
    )
}

const WhiteBackground = styled.div`
    display: flex;
    justify-content: center;

    background-image: url(${pokemonWhiteBg});
    background-size: cover;
    background-repeat: no-repeat;
    
    position: relative;
    overflow: hidden;

    height: calc(100vh - 124px);
    width: 100%;
`

const BlackBackground = styled.div`
    display: flex;
    justify-content: center;

    background-image: url(${pokemonBlackBg});
    background-size: cover;
    background-repeat: no-repeat;

    position: relative;
    overflow: hidden;

    height: calc(100vh - 124px);
    width: 100%;
`



const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    
    position: relative;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }

    background-color: ${({ theme }) => theme.backgroundColor};

    height: 100%;
    max-width: 920px;
    width: 100%;
`

const SearchContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 40px;
    width: 100%;

    @media(max-width: 475px) {
        flex-direction: column;
    }
`

const Input = styled.input`
    width: 200px;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.color};
    border-radius: 5px;
    text-align: center;
    margin: 30px 0px
`

const ButtonsDiv = styled.div`
    display: flex;
    gap: 20px;

    @media(max-width: 475px) {
        margin-bottom: 20px;
    }
`

const Select = styled.select`
    height: 30px;
    align-self: center;
    width: 100px;
    padding: 5px;
    border: 1px solid ${({ theme }) => theme.color};
    border-radius: 5px;
    text-align: center;
    text-transform: capitalize;
`

const Option = styled.option`
    text-transform: capitalize;
`

const DivButton = styled.div`
    display: flex;
    padding: 40px 0px;
`
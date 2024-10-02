import styled from "styled-components"

const MainInfo = styled.div`
    padding: 10px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    border-bottom: 1px solid #000;
`
const PokemonName = styled.h1`
    font-size: 40px;
    text-align: center;
    text-transform: capitalize;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.color};
    margin-bottom: 20px;
`
const TypesDiv = styled.div`
    padding: 10px;
    border-radius: 10px;
`

const TypesUl = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    list-style: none;
`

const ImagesTitle = styled.h2`
    font-size: 20px;
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 10px;
`

export { MainInfo, PokemonName, ImagesTitle, TypesDiv, TypesUl }
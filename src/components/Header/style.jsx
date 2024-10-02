import styled from "styled-components";

const Title = styled.h1`
    text-align: center;
    font-family: 'Regular', sans-serif;
    color: ${({ theme }) => theme.color};
    font-size: 40px;
    margin: 0 5px;

    @media(max-width: 630px) {
        font-size: clamp(20px, 5vw, 30px);
    }
`

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 20px;
    background-color: #fc2f51;
    max-height: 124px;
`

const PokeballLogo = styled.img`
    width: 40px;
    height: 40px;
`

export { Title, StyledHeader, PokeballLogo }
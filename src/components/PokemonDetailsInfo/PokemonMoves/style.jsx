import styled from "styled-components";

const Title = styled.h2`
    text-align: center;
    text-transform: capitalize;
    font-size: 26px;
    font-family: 'Regular', sans-serif;
    color: ${({ theme }) => theme.color};
`

const Moves = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    height: 350px;
    padding: 15px;
`
const MovesDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: scroll;
    background-color: ${({ theme }) => theme.backgroundColor};
    padding: 10px;
`

const Move = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor};
    border-radius: 5px;
    width: 300px;
    display: flex;
    gap: 10px;
`

const MoveName = styled.p`
    text-transform: capitalize;
    text-align: center;
    padding: 5px;
    font-family: 'Regular', sans-serif;
    color: ${({ theme }) => theme.color};
    width: 50%;
`

const MoveType = styled.p`
    text-align: center;
    text-transform: capitalize;
    border-radius: 0 5px 5px 0;
    padding: 5px 5px 5px 0;
    font-family: 'Regular', sans-serif;
    
    color: black;
    width: 50%;
`

export { Moves, MovesDiv, MoveName, Title, Move, MoveType }
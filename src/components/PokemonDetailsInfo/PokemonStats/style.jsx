import styled from "styled-components";

const PokemonStatsDiv = styled.div`
    padding: 15px;
    margin-left: 20px;
`

const Title = styled.h2`
    text-align: center;
    text-transform: capitalize;
    font-size: 26px;
    font-family: 'Regular', sans-serif;
    color: ${({ theme }) => theme.color};
`

const Stat = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: ${({ theme }) => theme.backgroundColor};
    border-radius: 10px;
    padding: 10px;
`

const StatInfo = styled.div`
    @media(max-width: 1000px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const StatName = styled.p`
    text-align: center;
    text-transform: capitalize;
    font-family: 'Regular', sans-serif;
    font-size: 20px;
    color: ${({ theme }) => theme.color};
`

const InputDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const Progress = styled.progress`
    -webkit-appearance: none;
    appearance: none;
    
    &::-webkit-progress-bar{
        background-color: gray;
        display: inline-block;
        border-radius: 2px;
    }
   
    &::-webkit-progress-value {
      background-color: ${props => {
        if (props.value > 70) return "#51fc2f";
        if (props.value >= 40 && props.value <= 70) return '#ffff00';
        return '#ff0000';
      }};
      border-radius: 2px;
      transition: 1s;
    }
`

const StatValue = styled.p`
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.color};
    font-weight: bold;
`

export { Progress, PokemonStatsDiv, InputDiv, Stat, StatName, StatValue, StatInfo, Title }
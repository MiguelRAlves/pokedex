import styled from "styled-components";

const Abilities = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-height: 350px;
    padding: 15px;
`
const Title = styled.h2`
    text-align: center;
    text-transform: capitalize;
    font-family: 'Regular', sans-serif;
    font-size: 26px;
    color: ${({ theme }) => theme.color};
`

const AbilitiesDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
`

const Ability = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: ${({ theme }) => theme.backgroundColor};
    border-radius: 10px;
    padding: 10px;
`

const AbilityName = styled.p`
    text-transform: capitalize;
    font-size: 24px;
    font-family: 'Regular', sans-serif;
    color: ${({ theme }) => theme.color};
`

const AbilityEffect = styled.p`
    font-size: 20px;
    font-family: 'Regular', sans-serif;
    color: ${({ theme }) => theme.color};
`

export { Abilities, Title, AbilitiesDiv, Ability, AbilityName, AbilityEffect }
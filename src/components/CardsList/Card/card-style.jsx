import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 10px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    border: 1px solid ${({ theme }) => theme.color};
    padding: 10px 20px 20px 20px;
    text-transform: capitalize;
    max-width: 150px;
    height: 270px;

    &:hover {
        border: 1px solid #535bf2;
        .pokemon-name, .pokemon-id {
            color: #535bf2;
        }
    }
`
export const P = styled.p`
    text-align: center;
    font-size: 14px;
`

export const TypesUl = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    list-style: none;
`

export const Type = styled.li`
    border: 1px solid ${({ theme }) => theme.color};
    border-radius: 5px;
    padding: 5px;
    font-family: 'Regular', sans-serif;
`
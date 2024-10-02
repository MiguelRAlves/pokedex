import styled from "styled-components"

const NavBtns = styled.div`
    display: flex;
    gap: 20px;
    margin: 20px 0px;
`
const Button = styled.button`
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 540px) {
        width: clamp(100px, 30vw, 150px);
`

export { NavBtns, Button }
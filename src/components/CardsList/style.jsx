import styled from "styled-components";

const Grid = styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    width: 100%;
    padding: 0px 40px;
    margin-bottom: 40px;
    grid-gap: 20px;
`

const Flex = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`

export { Grid, Flex }
import styled from "styled-components";

const DetailsDiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 20px 30px;

    @media(max-width: 1000px) {
        flex-direction: column;
    }
`

export { DetailsDiv }
import styled from "styled-components"

const Images = styled.div`
    padding: 10px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`
const FrontImg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 134px;
    width: 170px;
    border-radius: 10px;
    padding: 5px;
`
const FrontShinyImg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 134px;
    width: 170px;
    border-radius: 10px;
    padding: 5px;
`
const ImageDescription = styled.p`
    font-size: 12px;
    text-align: center;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    padding: 2px;
    border-radius: 5px;
`

export { Images, FrontImg, FrontShinyImg, ImageDescription }
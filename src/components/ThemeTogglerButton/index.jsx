import { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/theme-toggler"
import styled from "styled-components";
import themeTogglerButtonLogo from "./../../assets/images/theme-button-logo.png"

export const ThemeTogglerButton = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    
    return (
        <Button 
        className="btn theme-toggler-btn" 
        onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)} 
        theme={theme}>
            <ThemeTogglerButtonLogo src={themeTogglerButtonLogo}/>
        </Button>
    )
}

const Button = styled.button`
    background: ${({ theme }) => theme.secondaryBackgroundColor};
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

const ThemeTogglerButtonLogo = styled.img`
    width: 40px;
    height: 40px;
`
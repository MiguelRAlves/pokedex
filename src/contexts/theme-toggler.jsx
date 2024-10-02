import { createContext, useState } from 'react';

export const ThemeContext = createContext({});

export const themes = {
    light: {
        color: "#000000",
        backgroundColor: "#eeeeee",
        secondaryBackgroundColor: "#ffffff"
    },
    dark: {
        color: "#ededed",
        backgroundColor: "#2a2a2a",
        secondaryBackgroundColor: "#2b1b2b"
    }
}

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.light);

    return (
        <ThemeContext.Provider value={{theme, setTheme}} >
            {props.children}
        </ThemeContext.Provider>
    )
}
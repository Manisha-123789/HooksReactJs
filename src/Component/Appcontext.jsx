import { createContext, useState } from "react";

export const Appcontext = createContext();
export const ThemeContext = createContext();

const Contextprovider = (props) => {

    const phone = "+91-8369451223";
    const name = "InventoDesigner";

    return (
        <Appcontext.Provider value={{ phone, name }}>
            {props.children}
        </Appcontext.Provider>
    )
}

const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState('light');
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { Contextprovider, ThemeContextProvider };
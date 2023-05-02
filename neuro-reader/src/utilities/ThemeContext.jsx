import React, { createContext, useState} from "react";

const ThemeContext = createContext('light');

const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    const value = {
        darkMode,
        toggleDarkMode
    };

    return (<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>);

};

export { ThemeProvider, ThemeContext};

import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) =>{

    const [themeToggler, setThemeToggler] = useState({
        isSakuraTheme:true
    })

    const [theme, setTheme] = useState([
        {sakura: {name:'sakura',darkerBackdrop:'#DF7494',lightBackdrop:'#fbdcdc', backdrop:'#F8AFAF', syntax:'#333'} },
        {desert: {name:'desert',darkerBackdrop:'#dfa574',lightBackdrop:'#f9e9d2', backdrop:'#555', syntax:'#333'} } 
    ])


    const toggleTheme = () => {

        setThemeToggler({isSakuraTheme: !themeToggler.isSakuraTheme})
        
    }


return(

    <ThemeContext.Provider value={{theme, themeToggler, toggleTheme}}>
          {props.children}
    </ThemeContext.Provider>

)

}

export default ThemeContextProvider
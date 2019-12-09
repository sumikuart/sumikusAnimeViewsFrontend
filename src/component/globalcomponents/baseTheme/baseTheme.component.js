// Main:
import React, {useContext, useState} from 'react';
import {NavLink} from "react-router-dom";

// Styles:
import './baseTheme.style.css'

// Context:
import { ThemeContext } from '../../../context/theme.context';



const BaseThemeComponent = () => {

    const { theme, toggleTheme, themeToggler } = useContext(ThemeContext);
    const activeTheme = themeToggler.isSakuraTheme ? theme[0].sakura : theme[1].desert;

    return(
        <div className='baseThemeStyle' style={{ background:activeTheme.lightBackdrop, color: activeTheme.syntax}}>


        </div>
    )
}

export default BaseThemeComponent
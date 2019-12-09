// Main:
import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";

// Styles:
import './navigation.style.css'

// context
import { ThemeContext } from '../../../context/theme.context';

// Images:
import logo from '../../../assets/logo.jpg'

const NavigationsBar = () => {

    const { theme, toggleTheme, themeToggler } = useContext(ThemeContext);
    const activeTheme = themeToggler.isSakuraTheme ? theme[0].sakura : theme[1].desert;
    

    return(
        <div className="navStyle" style={{ background:activeTheme.darkerBackdrop, color: activeTheme.syntax}}>

            <NavLink to='/'> 
            <div className='logo'>
                <img src={logo} alt=""/>
            </div>
            </NavLink>


            <nav>
                <ul >
                 <li>Blogs
                        <ul style={{ background:activeTheme.darkerBackdrop, color: activeTheme.syntax}}>
                            <li><NavLink to='/teset' style={{color: activeTheme.syntax}}>New Blogs</NavLink></li>
                            <li><NavLink to='/' style={{color: activeTheme.syntax}}>Highs Voted Blogs</NavLink></li>
                            <li><NavLink to='/' style={{color: activeTheme.syntax}}>Complete List</NavLink></li>
                        </ul>
                    </li>
                    <li>Reviews
                        <ul style={{ background:activeTheme.darkerBackdrop, color: activeTheme.syntax}}>
                            <li><NavLink to='/' style={{color: activeTheme.syntax}}>New Reviews</NavLink></li>
                            <li><NavLink to='/' style={{color: activeTheme.syntax}}>High Score</NavLink></li>
                            <li><NavLink to='/' style={{color: activeTheme.syntax}}>Complete List</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to='/' style={{color: activeTheme.syntax}}>Forum</NavLink></li>
                    <li><NavLink to='/' style={{color: activeTheme.syntax}}>About</NavLink></li>
                    <li><NavLink to='/' style={{color: activeTheme.syntax}}>Login</NavLink></li>
                    <li><NavLink to='/' style={{color: activeTheme.syntax}}>Sign Up</NavLink></li>
                </ul>

                
                <div className='themeChanger'>
                    <p>Theme:</p>
                    <div className='themeflexer' onClick={toggleTheme}>
                        <p>Sakura</p>
                        <div className='switch'>
                            <div className={activeTheme.name}></div>
                        </div>
                        <p>Desert</p>
                    </div>

                </div>


            </nav>

        </div>
    )
}

export default NavigationsBar
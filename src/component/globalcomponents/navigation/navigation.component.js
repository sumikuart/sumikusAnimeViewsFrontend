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
                <li><NavLink to='/review' style={{color: activeTheme.syntax}}>Reviews</NavLink></li>
                 <li> <p>Blogs</p>
                        <ul style={{ background:activeTheme.darkerBackdrop, color: activeTheme.syntax}}>
                            <li><NavLink to='/teset' style={{color: activeTheme.syntax}}>New Blogs</NavLink></li>
                            <li><NavLink to='/' style={{color: activeTheme.syntax}}>Highs Voted Blogs</NavLink></li>
                            <li><NavLink to='/' style={{color: activeTheme.syntax}}>All Blog Posts</NavLink></li>
                        </ul>
                    </li>
                    <li><p>About</p>
                         <ul style={{ background:activeTheme.darkerBackdrop, color: activeTheme.syntax}}>
                            <li><NavLink to='/' style={{color: activeTheme.syntax}}>My Profile</NavLink></li>
                            <li><NavLink to='/' style={{color: activeTheme.syntax}}>Seen Anime</NavLink></li>
                            <li><NavLink to='/' style={{color: activeTheme.syntax}}>About</NavLink></li>
                        </ul>
                    </li>
                    <li><NavLink to='/' style={{color: activeTheme.syntax}}>Forum</NavLink></li>
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
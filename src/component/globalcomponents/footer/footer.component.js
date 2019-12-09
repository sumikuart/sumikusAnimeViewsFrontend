// Main:
import React, { useContext, useState } from 'react';
import { NavLink } from "react-router-dom";

// Styles:
import './footer.style.css'

// Context:
import { ThemeContext } from '../../../context/theme.context';



const FooterComponent = () => {

    const { theme, toggleTheme, themeToggler } = useContext(ThemeContext);
    const activeTheme = themeToggler.isSakuraTheme ? theme[0].sakura : theme[1].desert;

    return (
        <div className="footerStyle" style={{ background: activeTheme.darkerBackdrop, color: activeTheme.syntax }}>

            <div className='flexfooter'>

                <div className='info'>
                    <p>Sumiku's Anime Views</p>
                    <p>Made by: Kim J. Warncke</p>
                    <p>In Assosiation with: WebIt Aarhus</p>
                    <p>Started: 09-12-2019</p>
                    <p>Completed: ??-??-2019</p>
                </div>

                <div className='contactForm'>
                    <p>Contact me:</p>

                    <form>
                        <div>
                            <div className='left'>

                                <label> Name: </label>
                                <input type="text" placeholder='Name...' style={{ background:activeTheme.lightBackdrop}}/>

                                <label> E-Mail: </label>
                                <input type="text" placeholder='Mail...'  style={{ background:activeTheme.lightBackdrop}}/>

                            </div>
                            <div className='right'>

                                <label> Note: </label>
                                <textarea placeholder='Note...' style={{ background:activeTheme.lightBackdrop}} ></textarea>

                            </div>
                        </div>


                        <input type="submit" value="Send" />
                    </form>
                </div>
            </div>

        </div>
    )
}

export default FooterComponent
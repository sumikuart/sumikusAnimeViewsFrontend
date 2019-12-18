// Main:
import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';


// Styles:
import './termofuse.style.css'

// Context:
import { ThemeContext } from '../../../../context/theme.context'
import { UserContext } from '../../../../context/user.context'

// image
import banner from '../../../../assets/termBanner.jpg'

import stare1 from '../../../../assets/terms/stare1.jpg'
import stare2  from '../../../../assets/terms/stare2.png'


const TermofUseComponent = () => {

    const { theme, toggleTheme, themeToggler } = useContext(ThemeContext);
    const activeTheme = themeToggler.isSakuraTheme ? theme[0].sakura : theme[1].desert;

    return (
        <div className="termSyle" style={{ background: activeTheme.backdrop, color: activeTheme.syntax }}>

            <img src={banner} alt="" className='banner'/>
            <p className='headline'>Term Of Use</p>

            <div className='termContent'>

              <div className='flex'>

                <img src={stare1} alt=""/>

                <div>
                <p> D.O.N.T. </p>
                <p> B.E. </p>
                <p> A. </p>
                <p> J.E.R.K. </p>
          
                </div>

                <img src={stare2} alt=""/>

                   
              </div>
                
            </div>


        </div>
    )

}

export default TermofUseComponent
// Main:
import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';


// Styles:
import './landing.style.css'

// Context:
import { ThemeContext } from '../../../context/theme.context'
import { UserContext } from '../../../context/user.context'

// image
import banner from '../../../assets/landingBanner.jpg'

import wave from '../../../assets/frontpage/mashahello.png'
import sorry from '../../../assets/frontpage/sorry.jpg'
import girl from '../../../assets/frontpage/cat.png'

const LandingComponent = () => {

    const { theme, toggleTheme, themeToggler } = useContext(ThemeContext);
    const activeTheme = themeToggler.isSakuraTheme ? theme[0].sakura : theme[1].desert;

    const [completeReviewList ,setCompleteReviewList] = useState([])
    const [loading ,setLoading] = useState(false)

    const { username, onlineStatus, Logon, usertype } = useContext(UserContext)





    return (
        <div className="landingpageStyle" style={{ background: activeTheme.backdrop, color: activeTheme.syntax }}>

            <img src={banner} alt="" className='banner'/>
            <p className='headline'>Sumiku's Anime Views</p>

            <div className='frontContent'>

                <div className='flex intro'>

                    <div className='textintro' style={{ border: '10px solid' + activeTheme.darkerBackdrop}}>
                    <p className='underHeadline'>Welcome  to my Site</p>

                    <p className='bread' >
                    <img src={wave} alt="" className='wave'/>
                        Hiiiii My name is Sumiku! 	&#10084; <span></span>
                        This is my Anime Site! <span></span>
                        it contains ALLLL my thougths about anime. <span></span>
                        From Reviews, to Blogs on hot topics and more..... <span></span>
                        <span></span>
                        Currently under Construction.  <span></span>
                        <img src={sorry} alt="" className='emote'/>
                        Sorrryyyyyyyyyyyyyyyy~~~~~~ <span></span>
                        Still! Dont miss out!!!<span></span>
                        Make your user today, and follow the revolution! <span></span>
                        have fun!!! &#10084;&#10084;&#10084;
                    </p>
                    </div>

                    <div className='linkintro' style={{ border: '10px solid' + activeTheme.darkerBackdrop}}>
                        <p className='underHeadline'>Quick Links</p>
                        <ul>
                            <li><NavLink to='/signup'>Sign Up[&#10003;]</NavLink></li>
                            <li><NavLink to='/login'>Log - in[&#10003;]</NavLink></li>
                            <li><NavLink to='/review'>Reviews[&#10003;]</NavLink></li>
                            <li><NavLink to='/'>Blogs[X]</NavLink></li>
                        </ul>


                        <img src={girl} alt="" className='biganimeimg'/>
                    </div>
                </div>
          
            </div>

        </div>
    )

}


export default LandingComponent
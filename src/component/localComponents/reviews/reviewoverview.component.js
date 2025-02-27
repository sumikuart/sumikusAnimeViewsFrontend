// Main:
import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';


// Styles:
import './reviewoverview.style.css'

// Context:
import { ThemeContext } from '../../../context/theme.context'
import { UserContext } from '../../../context/user.context'

// image
import banner from '../../../assets/reviewbanner.jpg'


const ReviewOverviewComponent = () => {

    const { theme, toggleTheme, themeToggler } = useContext(ThemeContext);
    const activeTheme = themeToggler.isSakuraTheme ? theme[0].sakura : theme[1].desert;

    const [completeReviewList ,setCompleteReviewList] = useState([])
    const [loading ,setLoading] = useState(false)

    const { username, onlineStatus, Logon, usertype } = useContext(UserContext)

        useEffect(() => {
            axios.get('http://localhost:8888/review/getall')
            .then(response => {
                setCompleteReviewList(response.data)
                setLoading(true)
            }).catch(function(error) {
                console.log('an Error has accurd in Reviewcomponent')
            });
        },[])


        console.log(usertype)
const userDeff = (e) => {
if(usertype > 0) {
    return(
        <div className='reviewNav'>
            <ul>
                <li><NavLink to='./review/add'> Add New Review</NavLink></li>
            </ul>
        </div>

)

}
else {

    return(
        <div>

        </div>
    )

}
}


if(loading) {

    return (
        <div className="reviewOverviewStyle" style={{ background: activeTheme.backdrop, color: activeTheme.syntax }}>

            <img src={banner} alt="" className='banner'/>
            <p className='headline'>Reviews</p>


            {userDeff()}

            <div className='CompleteReviewDisplay' style={{ background: activeTheme.darkerBackdrop, border: '10px solid' + activeTheme.darkerBackdrop}}>
                    <NavLink to='/review/completelist'> Get all Reviews </NavLink>
            </div>

            <div className='newReviewDisplay' style={{ border: '10px solid' + activeTheme.darkerBackdrop}}>
                <p className='reviewDivHeadline'>Highlighted Review</p>

                <div className='reviewHiglightInfo'>

                    <div className='flex'>

                    <p className='higlightName'>{completeReviewList[completeReviewList.length -1 ].name}</p>
                    <p className='highlightScore'>{'score: ' +completeReviewList[completeReviewList.length -1].score + '/5'}</p>

                    </div>


                        <img src={window.location.origin + '/assets/reviewImg/' + completeReviewList[completeReviewList.length -1].imgname} alt=""/>

                        <p className='descriptionHighlightinfo'><span>Short description: </span> {completeReviewList[completeReviewList.length -1].description}</p>

                        
                        <p className='reviewHighlightinfo'><span>Short Review-Preview: </span>{completeReviewList[completeReviewList.length -1].review}</p>

                        <NavLink to={'./review/detail/' + completeReviewList[completeReviewList.length -1]._id}>Read More...</NavLink>
                </div>

            </div>



            

        </div>
    )

} else {
    return(
        <div>
            <p>loading</p>
        </div>
    )
}

}

export default ReviewOverviewComponent
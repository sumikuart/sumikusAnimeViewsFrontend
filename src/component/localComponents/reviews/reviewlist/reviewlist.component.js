// Main:
import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';


// Styles:
import './reviewlist.style.css'

// Context:
import { ThemeContext } from '../../../../context/theme.context'
import { UserContext } from '../../../../context/user.context'

// image
import banner from '../../../../assets/reviewlistBanner.jpg'

const ReviewListPoster = (props) => {
    return( 
        <tr>
            <td style={{fontWeight:'bolder'}}>{props.currentReview.name}</td>
            <td>{props.currentReview.genre}</td>
            <td>{props.currentReview.score}/5</td>
            <td><NavLink to={'/review/detail/' + props.currentReview._id}>Read The Review</NavLink></td>
        </tr>
    )
}

const ReviewListComponent = () => {

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

const reviewcompletlistmapper = (e) =>{
    return completeReviewList.reverse().map(function(currentReview, i){
            return <ReviewListPoster  currentReview={currentReview} key={i} />
    })
}


if(loading) {

    return (
        <div className="reviewListStyle" style={{ background: activeTheme.backdrop, color: activeTheme.syntax }}>

            <img src={banner} alt="" className='banner'/>
            <p className='headline'>The Complete Review List</p>


            {userDeff()}

            <table style={{ border: '5px solid' + activeTheme.darkerBackdrop }}>
                <tr style={{background: activeTheme.darkerBackdrop,border: '5px solid' + activeTheme.darkerBackdrop }}>
                    <th style={{ width:'45%'}} >Anime:</th>
                    <th style={{ width:'30%'}} >Genre:</th>
                    <th style={{ width:'10%'}} >Score:</th>
                    <th style={{ width:'15%'}} >Link:</th>
                </tr>

                {reviewcompletlistmapper()}
            </table>



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

export default ReviewListComponent
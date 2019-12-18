// Main:
import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';


// Styles:
import './reviewDetailpage.style.css'

// Context:
import { ThemeContext } from '../../../../context/theme.context'
import { UserContext } from '../../../../context/user.context'

// image
import banner from '../../../../assets/reviewDetailbanner.jpg'

 
const ReviewDetailComponent = (props) => {

    const { theme, toggleTheme, themeToggler } = useContext(ThemeContext);
    const activeTheme = themeToggler.isSakuraTheme ? theme[0].sakura : theme[1].desert;

    const [completeReview, setCompleteReview] = useState([])

    const [loading, setLoading] = useState(false)

    const [activateDelete, setActivateDelete] = useState('hide')

    const { username, onlineStatus, Logon, usertype } = useContext(UserContext)

    const [MSG,setMSG] = useState('')
        

    useEffect(() => {


        axios.get('http://localhost:8888/review/getone/' + props.match.params.id)
            .then(response => {
                setCompleteReview(response.data)
                setLoading(true)
            }).catch(function (error) {
                console.log('an Error has accurd in Reviewcomponent')
            });

    }, [])

    const showDeleteOption = (e) => {

        if(activateDelete == 'hide') {
            setActivateDelete('show')
        } else {
            setActivateDelete('hide')
        }
    }

    const deleteReview = (props) => {
        
        axios.delete('http://localhost:8888/review/delete/' + completeReview._id)
            .then( res => console.log(res.data)).then(
                setMSG('Deleted')
            )

    }

    const userDeff = (e) => {
        if (usertype > 0) {
            return (
                <div className='reviewNav'>
                    <ul>
                        <li><NavLink to={'/review/edit/' + completeReview._id}> Edit Review</NavLink></li>
                        <li><p onClick={showDeleteOption}> Delete Review</p></li>
                    </ul>
                </div>

            )

        }
        else {

            return (
                <div>

                </div>
            )

        }
    }


    if (loading) {

        return (
            <div className="reviewDetailStyle" style={{ background: activeTheme.backdrop, color: activeTheme.syntax }}>

                <img src={banner} alt="" className='banner' />

                <div className='backToReviewDiv' style={{ background: activeTheme.darkerBackdrop, color: activeTheme.syntax }} >
                    <NavLink to='/review/completelist'>Back to Reviews</NavLink>
                </div>



                <p className='headline'>{'Review: ' + completeReview.name}</p>


                {userDeff()}

                <div className={'deleteConfirm ' + activateDelete} style={{ border: '10px solid' + activeTheme.darkerBackdrop }}>

                    <p>Are you Sure you want to <span>DELETE</span> the</p>
                    <p className='chosenDelteBox'> {completeReview.name} Review</p>

                    <div className='flex optionboxDelete'>

                        <div className='deleteNo' onClick={showDeleteOption}>
                            <p>NO!</p>
                        </div>

                        <div className='deleteYes' onClick={deleteReview}>
                            <p>YES!</p>
                        </div>
                    </div>

                </div>

                <p>{MSG}</p>

                <div className='flex introReviewDiv'>
                    <div className='aboutDetailReviewDiv' style={{ border: '10px solid' + activeTheme.darkerBackdrop }} >
                        <p className='underheadline'>About:</p>
                        <p className='bread'>{completeReview.description}</p>
                        <p className='bread'>Genre: {completeReview.genre}</p>
                    </div>

                    <div className='imgDetailReviewDiv'>
                        <img src={window.location.origin + '/assets/reviewImg/' + completeReview.imgname} alt="" />
                    </div>

                </div>

                <div className='infoReviewDiv' style={{ border: '10px solid' + activeTheme.darkerBackdrop }} >

                    <p className='underheadline'>Review:</p>
                    <p className='bread'>{completeReview.review}</p>

                </div>

                <div className='flex conclusionReviewDiv'>

                    <div className='scoreReviewDiv' style={{ border: '10px solid' + activeTheme.darkerBackdrop }} >

                        <p className='underheadline'>TheScore:</p>
                        <p className='bread'>{completeReview.score} / 5</p>

                    </div>

                    <div className='relateReviewDiv' style={{ border: '10px solid' + activeTheme.darkerBackdrop }} >
                        <p className='underheadline'>Recommendations:</p>
                        <p className='bread'>{completeReview.recomendations}</p>
                    </div>

                </div>


            </div>
        )

    } else {
        return (
            <div>
                <p>loading</p>
            </div>
        )
    }

}

export default ReviewDetailComponent
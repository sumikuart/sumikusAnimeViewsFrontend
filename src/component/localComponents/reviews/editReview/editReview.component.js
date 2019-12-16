// Main:
import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';


// Styles:
import './editReview.style.css'

// Context:
import { ThemeContext } from '../../../../context/theme.context'
import { UserContext } from '../../../../context/user.context'

// image
import banner from '../../../../assets/reviewEditbanner.jpg'



const EditReviewComponent = (props) => {

    const { theme, toggleTheme, themeToggler } = useContext(ThemeContext);
    const activeTheme = themeToggler.isSakuraTheme ? theme[0].sakura : theme[1].desert;

    const [completeReview, setCompleteReview] = useState([])
    const [loading ,setLoading] = useState(false)


    const { username, onlineStatus, Logon, usertype } = useContext(UserContext)

    useEffect(() => {


        axios.get('http://localhost:8888/review/getone/' + props.match.params.id)
            .then(response => {
                setCompleteReview(response.data)
                setLoading(true)
            }).catch(function (error) {
                console.log('an Error has accurd in Reviewcomponent')
            });

    }, [])


    const saveEditReview = (e) => {
        e.preventDefault();
    
        const review = {
            name: completeReview.name,
            genre:  completeReview.genre,
            score:  completeReview.score,
            description: completeReview.description,
            review:  completeReview.review,
            recomendations:  completeReview.recomendations
        }

        console.log(completeReview)
    
        axios.post('http://localhost:8888/review/update/' + completeReview._id, review)
        .then(res => console.log(res.data))
    }


if(loading) {
    return (
        <div className="reviewEditStyle" style={{ background: activeTheme.backdrop, color: activeTheme.syntax }}>

        <img src={banner} alt="" className='banner'/>
        <p className='headline'>Edit Review</p>

            <div className='editFormContainer'>

                <p className='idholderEdit'>{'id: ' + completeReview._id}</p>

                <form style={{border: '5px solid' + activeTheme.darkerBackdrop }} onSubmit={saveEditReview}>
                    <label>Name:</label>
                    <input type="text" value={completeReview.name} onChange={(e) => setCompleteReview({...completeReview, name:e.target.value})}/>

                    <label>Genre:</label>
                    <input type="text" value={completeReview.genre} onChange={(e) => setCompleteReview({...completeReview, genre:e.target.value})}/>
                    
                    <label>Score:</label>
                    <select value={completeReview.score} onChange={(e) => setCompleteReview({...completeReview, score:e.target.value})}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    
                    <label>Description:</label>
                    <textarea value={completeReview.description} onChange={(e) => setCompleteReview( {...completeReview, description:e.target.value})}/>

                    <label>Review:</label>
                    <textarea value={completeReview.review} onChange={(e) => setCompleteReview({...completeReview, review:e.target.value})}/>

                    <label>Recomendations:</label>
                    <input type="text" value={completeReview.recomendations} onChange={(e) => setCompleteReview({...completeReview, recomendations:e.target.value})}/>

                    <input type="submit" value="Update"/>
                    
                </form>

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

export default EditReviewComponent
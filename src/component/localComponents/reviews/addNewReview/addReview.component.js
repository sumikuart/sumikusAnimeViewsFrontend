// Main:
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom";

// Styles:
import './addReview.style.css'

// Context:
import { ThemeContext } from '../../../../context/theme.context'

// image
import banner from '../../../../assets/addreviewbanner.jpg'



const AddReviewComponent = () => {

    const { theme, toggleTheme, themeToggler } = useContext(ThemeContext);
    const activeTheme = themeToggler.isSakuraTheme ? theme[0].sakura : theme[1].desert;

    const [addReviewName, setaddReviewName] = useState('')
    const [addReviewGenre, setaddReviewGenre] = useState('')
    const [addReviewScore, setaddReviewScore] = useState('')
    const [addReviewDescription, setaddReviewDescription] = useState('')
    const [addReviewReview, setaddReviewReview] = useState('')
    const [addReviewRecomidations, setaddReviewRecomidations] = useState('')
    const [addReviewImg, setaddReviewImg] = useState('')
    const [addReviewImgName, setaddReviewImgName] = useState('')

  
    const handelImgChange = (e) => {

        setaddReviewImgName(e.target.files[0].name)
        setaddReviewImg(e.target.files[0])
    }

    const completeNewReview = (e) => {

        const completeReview=
            {name:addReviewName,
            genre:addReviewGenre,
            score:addReviewScore,
            description:addReviewDescription,
            review:addReviewReview,
            recomendations:addReviewRecomidations,
            img:addReviewImg,
            imgname:addReviewImgName
        }
        

        console.log(completeReview)

        const data = new FormData();

        data.append('file', completeReview.img);
        data.append('imgname',completeReview.imgname);
        data.append('name',completeReview.name);
        data.append('genre',completeReview.genre);
        data.append('score',completeReview.score);
        data.append('description',completeReview.description);
        data.append('review',completeReview.review);
        data.append('recomendations',completeReview.recomendations);


        axios.post("http://localhost:8888/review/add", data, {}).then(
            res => {
                console.log(res.statusText)
            }
        )

        
        setaddReviewName('')
        setaddReviewGenre('')
        setaddReviewScore('')
        setaddReviewDescription('')
        setaddReviewReview('')
        setaddReviewRecomidations('')
        setaddReviewImg('')
        setaddReviewImgName('')

                    


    }


    return (
        <div className="addReviewStyle" style={{ background: activeTheme.backdrop, color: activeTheme.syntax }}>
        <img src={banner} alt="" className='banner'/>
        <p className='headline'>Add New Review</p>

        <div className='addReviewForm'>

            <form>
                <div className='flex'>

                <label>Name:</label>
                <input type="text" placeholder='Name...' value={addReviewName} onChange={(e) => setaddReviewName(e.target.value)}/>

                <label>Genre:</label>
                <input type="text" placeholder='Genre...' value={addReviewGenre} onChange={(e) => setaddReviewGenre(e.target.value)}/>

                <label>Score:</label>
                <select onChange={(e) => setaddReviewScore(e.target.value)}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>

 
                </div>
       


                <label>Story Description:</label>
                <textarea className='storyDescriptionAddReview' placeholder='Description...' value={addReviewDescription} onChange={(e) => setaddReviewDescription(e.target.value)}></textarea>

                <label>Review:</label>
                <textarea className='reviewDescriptionAddReview' placeholder='Review...' value={addReviewReview} onChange={(e) => setaddReviewReview(e.target.value)}></textarea>

                <label>You Might like:</label>
                <input type="text" className='recomendationReview' placeholder='Recomendations...' value={addReviewRecomidations} onChange={(e) => setaddReviewRecomidations(e.target.value)}/>

                <label>Image for Banner(Ratio: 3.65/1):</label>
                <input type='file' name="image"  accept="image/*" onChange={handelImgChange}/>

            </form>

        </div>

        <div className='submitReviewButton'>
            <div className='styler' style={{ background: activeTheme.darkerBackdrop}} onClick={completeNewReview}>
                <p>Submit Review</p>
            </div>
        </div>

        </div>
    )
}

export default AddReviewComponent
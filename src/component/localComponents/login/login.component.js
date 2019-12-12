// Main:
import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';


// Styles:
import './login.style.css'

// Context:
import { ThemeContext } from '../../../context/theme.context'
import { UserContext } from '../../../context/user.context';

// image
import loginBanner from '../../../assets/loginBanner.jpg'
import loginSidebar from '../../../assets/loginSidebar.jpg'

const LoginComponent = () => {

    const { theme, toggleTheme, themeToggler } = useContext(ThemeContext);
    const activeTheme = themeToggler.isSakuraTheme ? theme[0].sakura : theme[1].desert;

    
    const { username, onlineStatus, Logon } = useContext(UserContext)



    const [userList, setUserlist] = useState([])
    const [loading ,setLoading] = useState(false)

    useEffect(() => {
      // Chekker om brugenavn og allerede eksister:
      axios.get('http://localhost:8888/user/getall')
      .then(response => {
          setUserlist(response.data)
          setLoading(true)
      }).catch(function(error) {
          console.log('an Error has accurd in get User list')
        });
    },[])

    const [typedUsername, setTypedUsername] = useState('')
    const [typedPassword, setTypedPassword] = useState('')
    const [keeponline, setKeeponline] = useState('')
    
    const [errorMessage, setErrorMessage] = useState('')
   const handelonChangeUsername  = (e) =>{
    setTypedUsername(e.target.value)
   }

   const handelonChangePassword = (e) => {
    setTypedPassword(e.target.value)
   }

   const keepMeOnlineHandler = (e) => {
    setKeeponline(e.target.checked)
}

    const loginFunction = (e) => {
        e.preventDefault()

        if(!typedUsername == ''){
            for(var i=0; i < userList.length; i++){
                if(userList[i].username == typedUsername) {
                    if(userList[i].password == typedPassword) {

                        if(keeponline) {
                            const newOnline = {
                                username:userList[i].username,
                                level: userList[i].level,
                                isOnline:true
                            }
                            axios.post("http://localhost:8888//user/online/add", newOnline, {}).then(
                                res => {
                                    console.log(res.statusText)
                                }
            
                            )
                            
                        }

                        console.log( userList[i].level)
            
                        setErrorMessage('Logged in')
                        Logon(typedUsername, userList[i].level)

                    


                    } else {
                        setErrorMessage('Wrong Password')
                    }
    
                } 
            }
        }
     
        
    }

    
if(loading) {
    return (
        <div className="loginStyle" style={{ background: activeTheme.backdrop, color: activeTheme.syntax }}>

            <img src={loginBanner} alt="" className='banner' />

            <p className='headline'>Login</p>

            <div className='flex'>

            <div className="loginformDiv">
                    <form onSubmit={loginFunction}>
                        <label>User Name:</label>
                        <input type="text" placeholder="Username...." value={typedUsername} onChange={handelonChangeUsername}/>

                        <label>Password:</label>
                        <input type="password" placeholder="Password...." value={typedPassword}  onChange={handelonChangePassword}/>

                        <div className='keepOnline'>
                            <label>Keep me Online: (not working yet)</label>
                            <input type="checkbox" onChange={keepMeOnlineHandler}/>
                        </div>

                        <p>{errorMessage}</p>
                        <input type="submit" value="Log - In"/>
                    </form>
                </div>

                <div className="imgLoginDiv">
                    <img src={loginSidebar} alt=""/>
                </div>

                </div>

        </div>
    ) } else {
        return(
            <div>
                <p>loading</p>
            </div>
        )
    }


}

export default LoginComponent
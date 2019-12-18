// Main:
import React, { useContext, useState, useEffect } from 'react';
import { NavLink, useHistory } from "react-router-dom";
import axios from 'axios';


// Styles:
import './signup.style.css'

// Context:
import { ThemeContext } from '../../../context/theme.context'

// image
import sidesignup from '../../../assets/sideSignup.jpg'
import signupBanner from '../../../assets/signupBanner.jpg'


const SignUpComponent = () => {

    const { theme, toggleTheme, themeToggler } = useContext(ThemeContext);
    const activeTheme = themeToggler.isSakuraTheme ? theme[0].sakura : theme[1].desert;

    const [userName, setUserName] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [terms, setTerms] = useState('')

    const [completeMessage, setCompleteMessage] = useState('')



    const [userList, setUserlist] = useState([])
    const [loading ,setLoading] = useState(false)

    let history = useHistory()
    

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



    const handelUserNameChange = (e) => {
        setUserName(e.target.value)
    }

    const handelNameChange = (e) => {
        setName(e.target.value)
    }

    const handelEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handelPasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handelRePasswordChange = (e) => {
        setRePassword(e.target.value)
    }

    const handelTermsChange = (e) => {
        setTerms(e.target.checked)
    }


    // -------------------------Validate: 

    const [errorUserName, setErrorUserName] = useState('')
    const [errorName, setErrorName] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorRePassword, setErrorRePassword] = useState('')
    const [errorTerms, setErrorTerms] = useState('')

    // Vaidate Vars: 
    var hasNumber = /\d/;
 

    // Validate Functions:
    const validateUserName = (e) => {

        for(var i=0; i < userList.length; i++){
            console.log(userList[i])
    
            if(userList[i].username === userName) {
                setErrorUserName('Error: Username in use')
                return(false)
            }

        }
    

        if (userName === '') {
            setErrorUserName('Error: Missing info')
            return(false)
        } else {
            setErrorUserName('')
            return(true)
        }

    }

    const validateName = (e) => {
        if (name === '') {
            setErrorName('Error: Missing info')
            return(false)

        } else if (hasNumber.test(name)) {
            setErrorName('Error: Numbers are not allowed')
            return(false)
        } else {
            setErrorName('')
            return(true)

        }

    }

    const validateEmail = (e) => {

        for(var i=0; i < userList.length; i++){
            console.log(userList[i])
    
            if(userList[i].email === email) {
                setErrorUserName('Error: Email is in use')
                return(false)
            }

        }
        

        if (email === '') {
            setErrorEmail('Error: Missing info')
            return(false)
        } else if (!email.includes('@')) {
            setErrorEmail('Error: Needs to Contain a "@"')
            return(false)
        } else if (!email.includes('.')) {
            setErrorEmail('Error: Needs to Contain a "."')
            return(false)
                } else {
            setErrorEmail('')
            return(true)
        }
    }

    const validatePassword = (e) => {

        if (password === '') {
            setErrorPassword('Error: Missing info')
            return(false)
        } else {
            setErrorPassword('')
            return(true)

        }
    }

    const validateRePassword = (e) => {

        if (rePassword === '') {
            setErrorRePassword('Error: Missing info')
            return(false)
        } else if (password === rePassword) {
            setErrorRePassword('')
            return(true)
        } else {
            setErrorRePassword('Error: Password Dont match')
            return(false)
        }


    }

    const validateTerm = (e) => {

        if (terms === '' || terms === false) {
            setErrorTerms('Error: You need to agree to Terms of use in order to progress')
            return(false)
        } else {
            setErrorTerms('')
            return(true)
        }
    }

    const handelSubmit = (e) => {
        e.preventDefault()

        validateUserName()
        validateName()
        validateEmail()
        validatePassword()
        validateRePassword()
        validateTerm()

        

        console.log('UserName: ', { userName })
        console.log('Name: ', { name })
        console.log('Email: ', { email })
        console.log('Password: ', { password })
        console.log('Repassword: ', { rePassword })
        console.log('Terms: ', { terms })


      if(validateUserName() &&   validateName() && validateEmail() && validatePassword() && validateRePassword() &&  validateTerm()) {


            const newUser = {
                username:userName,
                name:name,
                email: email,
                password: password
            }

            axios.post("http://localhost:8888/user/add", newUser, {}).then(
                res => {
                    console.log(res.statusText)
                }
                
            )

            setCompleteMessage('User "' + userName + '" Has Been made')


            setUserName('')
            setName('')
            setEmail('')
            setPassword('')
            setRePassword('')
            setTerms('')

            
            history.push("/login");
    
        } else {
    
                setCompleteMessage('Error: Something needs you attention')
           
        }

    }

    
if(loading) {
    return (
        <div className="signUpStyle" style={{ background: activeTheme.backdrop, color: activeTheme.syntax }}>

            <img src={signupBanner} alt="" className='banner' />

            <p className='headline'>Sign Up</p>

            <div className='flex'>

                <div className='signUpContent'>

                    <form>

                        <div className='signUpGrupeOne'>
                            <label>User name: <span>{errorUserName}</span></label>
                            <input type="text" placeholder="User name..." value={userName} onChange={handelUserNameChange} onBlur={validateUserName} />

                            <label>Name:<span>{errorName}</span></label>
                            <input type="text" placeholder="Name..." value={name} onChange={handelNameChange} onBlur={validateName} />

                            <label>Email:<span>{errorEmail}</span></label>
                            <input type="text" placeholder="Email..." value={email} onChange={handelEmailChange} onBlur={validateEmail} />
                        </div>


                        <div className='signUpGrupeTwo'>
                            <label>Password:<span>{errorPassword}</span></label>
                            <input type="password" placeholder="Password..." value={password} onChange={handelPasswordChange} onBlur={validatePassword} />

                            <label>Reconfirm Password:<span>{errorRePassword}</span></label>
                            <input type="password" placeholder="Reconfirm Password..." value={rePassword} onChange={handelRePasswordChange} onBlur={validateRePassword} />
                        </div>

                        <div className="flex signUpGrupeThree">
                            <label>I agree to the <NavLink to='/about/terms'>Terms of use</NavLink>:</label>
                            <input type="checkbox" onChange={handelTermsChange} />
                            <p className='error'>{errorTerms}</p>
                        </div>


                        <p className='completMessage'>{completeMessage}</p>
                        <div className='makeuserButton' onClick={handelSubmit}>
                        <p>Make User</p>
                        </div>

                    </form>

                </div>


                <div className='rightImgContenOfSignUp'>
                    <img src={sidesignup} alt="signupHanger" />
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

export default SignUpComponent
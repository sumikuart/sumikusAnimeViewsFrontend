import React, { createContext, useState } from 'react';
import axios from 'axios';

export const UserContext = createContext();

const UserContextProvider = (props) =>{



    const [onlineStatus, setOnlineStatus] = useState({
        isOnline:false
    })

    const [username, setUsername] = useState('')
    const [usertype, setUsertype] = useState(0)


    const Logon = (username, usertype) => {
        setOnlineStatus({isOnline: !onlineStatus.isOnline})
        setUsername(username)
        setUsertype(usertype)
    }


return(

    <UserContext.Provider value={{username, usertype, onlineStatus, Logon}}>
          {props.children}
    </UserContext.Provider>

)

}

export default UserContextProvider
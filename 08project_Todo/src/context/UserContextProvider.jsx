import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";


const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);

    return(
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider

//the children components will now have access to the values/variables which are passed in value in usercontext.provider!!
import React, { createContext, useState } from 'react';
import { getAuth} from "firebase/auth";
import app from '../Firebase/Firebase.config';



export const AuthContext = createContext();



const auth = getAuth(app);

const UserContext = ({children}) => {
    const[user,setUser ]=useState({displayName:'aaaakash'})
    const authInfo = {user}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
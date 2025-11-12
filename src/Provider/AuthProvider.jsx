 import React, { useState } from 'react';
import { createContext } from 'react';

 export const AuthContext = createContext()
 const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);


    const AuthData = {

    };

    return <AuthContext value={AuthData}>{children}</AuthContext>;
 };
 
 export default AuthProvider;
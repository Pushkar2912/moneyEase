import React, { createContext, useEffect, useState } from 'react'
import { getMe, signIn, signUp } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../utils/constants';


export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleSignUp = async (values) => {
        try {
            const { data } = await signUp(values);
            navigate(PATHS.LOGIN)
        } catch (error) {
            console.log(error);
            alert(error.response.data.message)
        }
    }

    const handleSignIn = async (values) => {
        try {
            const { data } = await signIn(values);
            setUser(data.userWithoutPassword);
            localStorage.setItem("token", data.token)
            window.location.reload();
            // navigate(PATHS.HOME)
        } catch (error) {
            console.log(error);
            alert(error.response.data.message) 
            
        }
    }

    const handleLogout = () => {
        try {
            localStorage.removeItem("token")
            window.location.reload();
        } catch (error) {
            alert(error.response.data.message);
        }
    }
    
    useEffect(() => {
        getMe().then(({data}) => {
            setUser(data.user)
            navigate(PATHS.HOME)
            setLoading(false)
        }).catch((error) => {
            navigate(PATHS.LOGIN)
            setLoading(false)
        })
    },[])
    
    const values = {
        user,
        handleSignUp,
        handleSignIn,
        handleLogout
    }

    if(loading){
        return(
            <p>Loading ...</p>
        )
    }
  return (
    <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
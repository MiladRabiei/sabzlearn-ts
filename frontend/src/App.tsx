import { useCallback, useEffect, useState } from 'react'
import './App.css'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import authContext from './Components/Context/AuthContext'
import { tokenType,userInfosType } from './Components/types/all.types'
import axios from 'axios'
function App() {
  const router=useRoutes(routes)
  const[isLoggedIn,setIsLoggedIn]=useState(false)
  const[token,setToken]=useState<tokenType>(null)
  const[userInfos,setUserInfos]=useState<userInfosType|null>(null)
  const[isLoading,setIsLoading]=useState(true)

  const login=useCallback((userInfos:userInfosType|null,token:string)=>{
    setToken(token)
    setUserInfos(userInfos)
    setIsLoggedIn(true)
    localStorage.setItem("user",JSON.stringify({token}))
  },[])

  useEffect(()=>{
    const localStorageData=localStorage.getItem("user")
    if(localStorageData){
      const{token}=JSON.parse(localStorageData)
      setIsLoading(true)
      axios.get("http://localhost:4000/v1/auth/me",
      {
        headers:{
          Authorization:`Bearer ${token}`
        }
      }
      ).then((res)=>{
        setUserInfos(res.data)
        setIsLoggedIn(true)
        console.log(res.data);
      }).catch(err=>{
        console.log("error fetching user infos: "+err);
        logOut()
      }).finally(()=>{
        
        setIsLoading(false)
      })
    }else{
      setIsLoading(false)
    }
  },[token])

  const logOut=()=>{
    setToken(null)
    setUserInfos(null)
    localStorage.removeItem("user")
  }
  return (
    <>
    <authContext.Provider value={{
      isLoggedIn,
      token,
      userInfos,
      login,
      logOut,
      isLoading

    }}>
      {router}
      </authContext.Provider>
    </>
  )
}

export default App

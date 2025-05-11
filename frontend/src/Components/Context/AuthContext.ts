import { createContext } from "react";
import { AuthContextType } from "../types/all.types";
const authContext=createContext<AuthContextType>({
    isLoggedIn:false,
    token:null,
    userInfos:null,
    isLoading:true,
    login:()=>{},
    logOut:()=>{}
})
export default authContext
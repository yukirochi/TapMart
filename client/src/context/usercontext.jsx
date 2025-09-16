import { createContext, useContext, useEffect, useState } from "react";

const Usercont = createContext();  

 export function Usercontext({ children }) {
    const [user, setuser] = useState(null);
      useEffect(()=>{
        const storeduser = localStorage.getItem("user");

        if(storeduser){
            setuser(JSON.parse(storeduser))
        }
    },[])
    
    const login = (userdata) => {
        setuser(userdata)
        localStorage.setItem("user",JSON.stringify(userdata))
    };
        
    const logout = () => {
        setuser(null)
        localStorage.removeItem("user")
    };


    return( 
        <Usercont.Provider value={{user, login, logout}}>
            {children}
        </Usercont.Provider>
    )
}

export const useUser = () => useContext(Usercont);

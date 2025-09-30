import { createContext, useContext, useEffect, useState } from "react";

const Usercont = createContext();

export function Usercontext({ children }) {
  const [user, setuser] = useState(null);
  useEffect(() => {
    const storeduser =
      localStorage.getItem("user") || sessionStorage.getItem("user");

    if (storeduser) {
      setuser(JSON.parse(storeduser));
    }
  }, []);

  const login = (userdata, remember) => {
    setuser(userdata);
    if (remember) {
      localStorage.setItem("user", JSON.stringify(userdata));
      sessionStorage.removeItem("user");
    } else {
      sessionStorage.setItem("user", JSON.stringify(userdata));
      localStorage.removeItem("user");
    }
  };

  const logout = () => {
    setuser(null);
    localStorage.removeItem("user");
    sessionStorage.removeItem("user")
  };

  return (
    <Usercont.Provider value={{ user, login, logout }}>
      {children}
    </Usercont.Provider>
  );
}

export const useUser = () => useContext(Usercont);

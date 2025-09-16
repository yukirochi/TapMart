
import logo from "../../assets/logo.png"
import axios from "axios"
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../../context/usercontext";
import { useNavigate } from "react-router-dom";
export default () => {
  let navigate = useNavigate()
  const {user, login, logout} = useUser()
  let [email, setemail] = useState(null)
  let [password, setpassword] = useState(null)

  let submit = async() => {
    let data = {email: email, password:password}
    let res =  await axios.post("http://localhost:4000/api/auth/login",data)
    let infos = res.data
  
    if(infos.status){
      login(infos.verify_info)
      navigate("/test")
    }
    
  }

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center bg-PaletteWhite sm:px-4 cursor-default">
      <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
        <div className="text-center">
          <img
            src={logo}
            width={150}
            className="mx-auto lg:w-[200px]"
          />
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Log in to your account
            </h3>
            <p className="">
              Don't have an account?
              <NavLink
                to="/auth/register"
                className="font-medium text-PaletteBrown hover:opacity-50 cursor-pointer"
              >
                Sign up
              </NavLink>
            </p>
          </div>
        </div>
        <div className="bg-white max-sm:bg-transparent max-sm:shadow-none shadow p-4 py-6 space-y-8 sm:p-6 sm:rounded-lg">

          <form onSubmit={(e) => {
            e.preventDefault()
            submit()
          }} className="space-y-5">
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-PaletteGreen shadow-sm rounded-lg"
                onChange={(e)=>setemail(e.target.value)}
              />
            </div>
            <div>
              <label className="font-medium">Password</label>
              <input
                type="password"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-PaletteGreen  shadow-sm rounded-lg"
                onChange={(e)=>setpassword(e.target.value)}
              />
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-PaletteBrown hover:bg-PaletteGreen rounded-lg duration-150 cursor-pointer">
              Sign in
            </button>
          </form>
        </div>
        <div className="text-center">
          <a href="javascript:void(0)" className="hover:text-PaletteGreen cursor-pointer">
            Forgot password?
          </a>
        </div>
      </div>
    </main>
  );
};

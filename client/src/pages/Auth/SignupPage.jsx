import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
export default () => {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center bg-PaletteWhite sm:px-4 cursor-default">
      <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
        <div className="text-center">
          <img src={logo} width={150} className="mx-auto lg:w-[200px]" />
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Create an account
            </h3>
            <p className="">
              Already have an account?
              <NavLink
                to="/auth/login"
                className="font-medium text-PaletteBrown hover:opacity-50"
              >
                Log in
              </NavLink>
            </p>
          </div>
        </div>
        <div className="bg-white max-sm:bg-transparent max-sm:shadow-none shadow p-4 py-6 sm:p-6 sm:rounded-lg">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div>
              <label className="font-medium">Name</label>
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-PaletteGreen shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-PaletteGreen shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Password</label>
              <input
                type="password"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-PaletteGreen shadow-sm rounded-lg"
              />
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-PaletteBrown hover:bg-PaletteGreen  rounded-lg duration-150">
              Create account
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

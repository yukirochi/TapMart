import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./css/nav.css"
import "./../../../src/all.css"
import { useUser } from "../../context/usercontext";
const AvatarMenue = () => {
  const {user, login, logout} = useUser()
  let navigate = useNavigate()
  const [state, setState] = useState(false);
  const profileRef = useRef();

  const navigation = [
    { title: "Profile", path: "/" },
    { title: "Settings", path: "/" },
  ];

  /*useEffect(() => {
    const handleDropDown = (e) => {
      if (!profileRef.current.contains(e.target)) setState(false);
    };
    document.addEventListener("click", handleDropDown);
  }, []);*/
 
  return (
    <div className="relative border-t lg:border-none z-50">
      <div className="">
        <button
          ref={profileRef}
          className="hidden w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 lg:focus:ring-2 lg:block"
          onClick={() => setState(!state)}
        >
          <img
            src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
            className="w-full h-full rounded-full"
          />
        </button>
      </div>
      <ul
        className={`bg-white top-14 right-0 mt-6 space-y-6 lg:absolute lg:border lg:rounded-md lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${
          state ? "" : "lg:hidden"
        }`}
      >
        {navigation.map((item, idx) => (
          <li key={idx}>
            <a
              className="block text-gray-600 hover:text-gray-900 lg:hover:bg-gray-50 lg:p-3"
              href={item.path}
            >
              {item.title}
            </a>
          </li>
        ))}
        <button className="block w-full text-justify text-gray-600 hover:text-gray-900 border-t py-3 lg:hover:bg-gray-50 lg:p-3" onClick={()=>{
          logout()
          navigate("/")
        }}>
          Logout
        </button>
      </ul>
    </div>
  );
};

export default () => {
  const {user, login, logout} = useUser()
  let navigate = useNavigate()
  if(!user){
    navigate("/")
  }

  let [search, setsearch] = useState(null)
  let [categories, setcategories] = useState([]);
  const scrollRef = useRef(null); 
  const getCatergories = async () => {
    let res = await axios.get("https://dummyjson.com/products/categories");

    let formatted = res.data.map((element) => ({
      title: element.name,
      path: `/shop/categories/${element.name.replace(/\s+/g, "-")}`,
    }));
    setcategories(formatted);
  };

  useEffect(() => {
    getCatergories();
  }, []);

  const [state, setState] = useState(false);

  const navigation = [
    { title: "Costumer Sevice", path: "/shop/categories/Beauty" },
    { title: "About us", path: "/shop/categories/Beauty" },
    { title: "Cart", path: "/shop/categories/Beauty" },
  ];

  const submenuNav = categories.length
    ? categories
    : [
        { title: "Overview", path: "/shop/categories/Beauty" },
        { title: "Integration", path: "/shop/categories/Beauty" },
        { title: "Billing", path: "/shop/categories/Beauty" },
        { title: "Transactions", path: "/shop/categories/Beauty" },
        { title: "Plans", path: "/shop/categories/Beauty" },
      ];

        
  let entersearch = () => {
    if(!search){
      return
    }
    navigate(`/shop/product/search?q=${search}`)

  }

  return (
    <header className="text-base lg:text-sm">
      <div
        className={`bg-white items-center gap-x-14 px-4 max-w-screen-xl mx-auto lg:flex lg:px-8 lg:static ${
          state ? "h-full fixed inset-x-0" : ""
        }`}
      >
        <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
          <Link to="/home">
            <img src={logo} width={80} height={30} alt="logo" />
          </Link>
          <div className="lg:hidden">
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`nav-menu flex-1 pb-28 mt-8 overflow-y-auto max-h-screen lg:block lg:overflow-visible lg:pb-0 lg:mt-0 ${
            state ? "" : "hidden"
          }`}
        >
          <ul className="items-center space-y-6 lg:flex lg:space-x-6 lg:space-y-0">
            <form
              onSubmit={(e) =>{
                e.preventDefault()
                entersearch()
                }
              }
              className="flex-1 items-center justify-start pb-4 lg:flex lg:pb-0"
            >
              <div className="flex items-center gap-1 px-2 border rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-2 py-2 text-gray-500 bg-transparent rounded-md outline-none"
                  onChange={(e)=> setsearch(e.target.value)}
                />
              </div>
            </form>
            {navigation.map((item, idx) => {
              if(item.title === "Cart"){
                    return (
                <li key={idx}>
                  <a
                    href={item.path}
                    className="block text-gray-700 hover:text-gray-900"
                  >
                   <NavLink  to={"/shop/cart"}><span class="material-symbols-outlined">shopping_bag</span> </NavLink>
                  </a>
                </li>
              );
              }
              return (
                <li key={idx}>
                  <a
                    href={item.path}
                    className="block text-gray-700 hover:text-gray-900"
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
            <AvatarMenue />
          </ul>
        </div>
      </div>
      <nav className="border-b flex justify-center">
  <div className="flex items-center gap-2 max-w-screen-xl w-full px-4 lg:px-8">

    <button
      onClick={() =>
        scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" })
      }
      className="bg-white shadow rounded-full p-2 z-10 hidden md:block"
      aria-label="Scroll left"
    >
      <ChevronLeft className="w-5 h-5" />
    </button>


    <ul
      ref={scrollRef}
      className="flex items-center gap-x-3 overflow-x-auto scrollbar-hide scroll-smooth flex-1"
    >
      {submenuNav.map((item, idx) => (
        <li key={idx} className="py-1 flex-shrink-0">
          <NavLink
            to={item.path}
            className="block py-2 px-3 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 duration-150"
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>


    <button
      onClick={() =>
        scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" })
      }
      className="bg-white shadow rounded-full p-2 z-10 hidden md:block"
      aria-label="Scroll right"
    >
      <ChevronRight className="w-5 h-5" />
    </button>
  </div>
</nav>

    </header>
  );
};

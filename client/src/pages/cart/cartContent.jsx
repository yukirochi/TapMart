import { use, useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../../context/usercontext";
function Cartcontent() {
  const { user } = useUser();
  const [cartitems, setusercart] = useState([]);
  const [loading, setLoading] = useState(true);

  const getcartdata = async (userId) => {
    try {
      const res = await axios.post("http://localhost:4000/api/cart/viewcart", {
        userId,
      });
      setusercart(res.data.userCartData || []);
      console.log(res.data.userCartData);
    } catch (error) {
      console.error("Error fetching cart:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?._id) {
      console.log(user._id);

      getcartdata(user._id);
    }
  }, [user]);

  if (loading) return <p>Loading cart...</p>;

  return (
    <section className="py-28 mt-[-60px]">
      <div className="max-w-screen-lg mx-auto px-4 md:px-8">
        <div className="max-w-md">
          <h1 className="text-gray-800 text-2xl font-bold sm:text-3xl">
            Shopping Cart
          </h1>
        </div>
        <ul className=" divide-y space-y-3">
          {cartitems &&
            cartitems.map((item, idx) => (
              <li
                key={idx}
                className="px-4 py-5 duration-150 hover:border-white hover:rounded-xl hover:bg-gray-50"
              >
                <a href={item.path} className="space-y-3">
                  <div className="flex items-center gap-x-3">
                    <div className="bg-white w-14 h-14 border rounded-full flex items-center justify-center">
                      {item.company_icon}
                    </div>
                    <div>
                      <span className="block text-sm text-indigo-600 font-medium">
                        {item.company_name}
                      </span>
                      <h3 className="text-base text-gray-800 font-semibold mt-1">
                        {item.job_title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 sm:text-sm">
                    {item.job_description}
                  </p>
                  <div className="text-sm text-gray-600 flex items-center gap-6">
                    <div class="relative flex items-center max-w-[8rem] mt-2">
                      <label className="relative flex items-center cursor-pointer group mr-2">
                        <input class="peer sr-only" type="checkbox" />
                        <div class="w-3 h-3 rounded-lg bg-white border-2 border-purple-500 transition-all duration-300 ease-in-out peer-checked:bg-gradient-to-br from-purple-500 to-pink-500 peer-checked:border-0 peer-checked:rotate-12 after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-5 after:h-5 after:opacity-0 after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSIyMCA2IDkgMTcgNCAxMiI+PC9wb2x5bGluZT48L3N2Zz4=')] after:bg-contain after:bg-no-repeat peer-checked:after:opacity-100 after:transition-opacity after:duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
                      </label>
                      <button
                        type="button"
                        id="decrement-button"
                        class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                      >
                        <svg
                          class="w-3 h-3 text-gray-900 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 1h16"
                          ></path>
                        </svg>
                      </button>
                      <input
                        type="text"
                        id="quantity-input"
                        data-input-counter=""
                        aria-describedby="helper-text-explanation"
                        class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="999"
                        required=""
                      />
                      <button
                        type="button"
                        id="increment-button"
                        class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                      >
                        <svg
                          class="w-3 h-3 text-gray-900 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 1v16M1 9h16"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <button className="flex items-center gap-2">Delete</button>
                  </div>
                </a>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

export default Cartcontent;

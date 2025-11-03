import useProductCache from "../../cache/productCache";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import "./../../../src/all.css";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useUser } from "../../context/usercontext";
import AddtoCart from "./addtoCart";

export default () => {
  let params = useParams();
  let navigate = useNavigate();
  let [defaultquant, usedefaultquant] = useState(1)
  let [searchparams] = useSearchParams();
  let [imagedisplay, setimagedisplay] = useState(0);
  let { data, error, loading } = useProductCache(
    `https://dummyjson.com/products/${params.id}`
  );
  let { togglecart, togglecartt } = useUser();

  if (loading) {
    return (
      <div className="w-full flex h-[40vh] justify-center items-center">
        <div class="flex-col gap-4 w-full flex items-center justify-center">
          <div class="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
            <div class="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }

  console.log(data);
  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        {data && (
          <div class="container px-6 py-10 mx-auto">
            <div class="lg:-mx-6 lg:flex lg:items-center">
              <div
                className="bg-contain bg-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem] flex justify-between items-center bg-no-repeat relative"
                style={{ backgroundImage: `url(${data.images[imagedisplay]})` }}
              >
                <button
                  className=" rounded-full p-2  h-full"
                  aria-label="Scroll left"
                  onClick={() =>
                    imagedisplay !== 0 ? setimagedisplay(imagedisplay - 1) : ""
                  }
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  className=" rounded-full p-2  h-full"
                  aria-label="Scroll right"
                  onClick={() =>
                    imagedisplay !== data.images.length - 1
                      ? setimagedisplay(imagedisplay + 1)
                      : ""
                  }
                >
                  <ChevronRight className=" w-5 h-5" />
                </button>
              </div>
              <div class="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                  {data.title}
                </h1>

                <p class="max-w-lg mt-3 text-gray-500 dark:text-gray-400 ">
                  {data.description}
                </p>

                <h3 class="mt-3 text-lg font-medium text-blue-500">
                  {data.price}$
                </h3>
                <p class="text-gray-600 dark:text-gray-300">
                  {data.shippingInformation}
                </p>

                <div class="flex gap-[5px]  mt-5 justify-start">
                  {data.images.map((img, key) => (
                    <img
                      key={key}
                      className="w-[50px] h-[50px] object-contain object-center bg-gray-100 hover:opacity-50"
                      style={{
                        backgroundColor: imagedisplay === key ? "gray" : "",
                      }}
                      src={img}
                      alt={`image-${key}`}
                      onClick={() => setimagedisplay(key)}
                    />
                  ))}
                </div>
                <div className="flex gap-5 mt-5">
                  <button className="button ">
                    <p class="text">Buy Now</p>
                  </button>
                  <button
                    class="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                  >
                    <svg
                      viewBox="0 0 16 16"
                      class="bi bi-cart-check"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#fff"
                    >
                      <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"></path>
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                    </svg>
                    <p class="text">Add To Cart</p>
                  </button>
                </div>
                <div>
                  
                  <div class="relative flex items-center max-w-[8rem] mt-2">
                    <button
                      type="button"
                      id="decrement-button"
                      onClick={()=> defaultquant !== 1 ? usedefaultquant(defaultquant - 1): null}
                      data-input-counter-decrement="quantity-input"
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
                      value={defaultquant}
                    />
                    <button
                      type="button"
                      id="increment-button"
                      onClick={()=>usedefaultquant(defaultquant + 1)}
                      data-input-counter-increment="quantity-input"
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
                  <button
                    className="backbutton mt-3"
                    onClick={() => navigate(-1)}
                  >
                    <svg
                      height="16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      viewBox="0 0 1024 1024"
                    >
                      <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
                    </svg>
                    <span>Back</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

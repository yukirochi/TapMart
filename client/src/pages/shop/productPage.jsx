import useProductCache from "../../cache/productCache";
import { useParams, useSearchParams } from "react-router-dom";
import "./../../../src/all.css";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
export default () => {
  let params = useParams();
  let [searchparams] = useSearchParams();
  let [imagedisplay, setimagedisplay] = useState(0);
  let { data, error, loading } = useProductCache(
    `https://dummyjson.com/products/${params.id}`
  );

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
    <section class="bg-white dark:bg-gray-900">
      {data && (
        <div class="container px-6 py-10 mx-auto">
          <div class="lg:-mx-6 lg:flex lg:items-center">
            <div
              className="bg-contain bg-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem] flex justify-between items-center bg-no-repeat"
              style={{ backgroundImage: `url(${data.images[imagedisplay]})` }}
            >
              <button
                className=" rounded-full p-2 z-10 h-full"
                aria-label="Scroll left"
                onClick={() =>
                  imagedisplay !== 0 ? setimagedisplay(imagedisplay - 1) : ""
                }
              >
               <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                className=" rounded-full p-2 z-10 h-full"
                aria-label="Scroll right"
                onClick={() =>
                  imagedisplay !== data.images.length - 1
                    ? setimagedisplay(imagedisplay + 1)
                    : ""
                }
              >
                <ChevronRight className="w-5 h-5" />
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
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

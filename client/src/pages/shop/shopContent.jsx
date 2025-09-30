import { useParams, useSearchParams } from "react-router-dom";
import Shopcontentpagin from "./shopcontentpagin";
import Product from "./product";
import useProductCache from "../../cache/productCache";
import { useEffect, useState } from "react";
import "./../../../src/all.css";
import Noresult from "./noresults";
function ShopContent() {
  let params = useParams();
  let [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  let url = "";

  if (params.id) {
    url = `https://dummyjson.com/products/category/${params.id}`;
  } else if (query) {
    url = `https://dummyjson.com/products/search?q=${query}`;
  }
  let { data, error, loading } = useProductCache(url);
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

  if (!data || !data.products || data.products.length === 0)
    return <Noresult></Noresult>;

  return (
    <div className="w-[100vw] overflow-x-hidden flex justify-center items-center flex-col">
      <div className="w-[100%] lg:max-w-[80vw] h-[100%] gap-[50px] flex flex-wrap items-start justify-center mt-10">
        {data?.products?.map((dat) => (
          <Product
            key={dat.id}
            id={dat.id}
            img={dat.thumbnail}
            name={dat.title}
            price={dat.price}
            rating={dat.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default ShopContent;

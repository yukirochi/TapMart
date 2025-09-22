import { useParams } from "react-router-dom";
import Shopcontentpagin from "./shopcontentpagin";
import Product from "./product";
import useProductCache from "../../cache/productCache";
import { useEffect, useState } from "react";
function ShopContent() {
  let params = useParams();
  let { data, error, loading } = useProductCache(
    `https://dummyjson.com/products/category/${params.id}`
  );

  console.log(data);

  return (
    <div className="w-[100vw] overflow-x-hidden flex justify-center items-center flex-col">
      <div className="w-[100%] lg:max-w-[80vw] h-[100% gap-[50px] flex flex-wrap items-start justify-center mt-10">
         {data?.products?.map((dat) => (
          <Product
            key={dat.id}
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

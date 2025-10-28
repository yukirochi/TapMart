import { Link } from "react-router-dom";
import "./../../../src/all.css";
import AddtoCart from "./addtoCart";
import { useState } from "react";
import { useUser } from "../../context/usercontext";
function Product({id,img, name,price,rating} ) {
 
    return ( 
       <Link to={{
        pathname: `/shop/product/${id}/${name}`
       }} className="group  block overflow-hidden max-w-[180px]">
 

  <img
    src={img}
    alt=""
    className="h-36 w-full object-contain transition duration-500 group-hover:scale-105"
  />

  <div className=" border border-gray-100 bg-white p-3">
 
    <span className="bg-yellow-400 px-2 py-0.5 text-[10px] font-medium whitespace-nowrap">{rating} </span>
    <h3 className="mt-2 text-sm font-medium text-gray-900 overflow-y-hidden w-[100%] h-[20px]">{name}</h3>

    <p className="mt-1 text-xs text-gray-700">${price}</p>

    <form className="mt-2">
      <button
        className="block w-full rounded-sm bg-yellow-400 py-1.5 text-xs font-medium transition hover:scale-105"
       
      >
        Add to Cart
      </button>
    </form>
  </div>
 
</Link>

     );
}

export default Product;
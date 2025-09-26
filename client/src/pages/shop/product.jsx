import { Link } from "react-router-dom";
import "./../../../src/all.css"
function Product({id,img, name,price,rating} ) {
    return ( 
       <Link to={{
        pathname: `/shop/product/${id}/${name}`
       }} className="group relative block overflow-hidden max-w-[180px]">
 

  <img
    src={img}
    alt=""
    className="h-36 w-full object-cover transition duration-500 group-hover:scale-105"
  />

  <div className="relative border border-gray-100 bg-white p-3">
 
    <span className="bg-yellow-400 px-2 py-0.5 text-[10px] font-medium whitespace-nowrap">{rating} </span>
    <h3 className="mt-2 text-sm font-medium text-gray-900">{name}</h3>

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
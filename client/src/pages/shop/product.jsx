function Product({img, name,price,rating} ) {
    return ( 
       <a href="#" className="group relative block overflow-hidden max-w-[180px]">
  <button
    className="absolute end-2 top-2 z-10 rounded-full bg-white p-1 text-gray-900 transition hover:text-gray-900/75"
  >
    <span className="sr-only">Wishlist</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  </button>

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
</a>

     );
}

export default Product;
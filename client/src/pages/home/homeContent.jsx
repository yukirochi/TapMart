import { useEffect, useState } from "react";
import banner from "../../assets/banner.png";
import useProductCache from "../../cache/productCache";
import { useNavigate } from "react-router-dom";
function HomeContent() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const cacheKey = "home-content";
  let navigate = useNavigate()
  const cacheDuration = 5 * 60 * 1000; 

  useEffect(() => {
    async function fetchData() {
      const cached = localStorage.getItem(cacheKey);
      const cachedTime = localStorage.getItem(`${cacheKey}_time`);
      const now = Date.now();

      if (cached && cachedTime && now - cachedTime < cacheDuration) {
        setResults(JSON.parse(cached));
        setLoading(false);
        return;
      }

 
      const categoriesRes = await fetch("https://dummyjson.com/products/categories");
      const categories = await categoriesRes.json();

      const fetchedResults = [];

      for (const category of categories) {
        const res = await fetch(`https://dummyjson.com/products/category/${category}?limit=1`);
        const data = await res.json();
        if (data.products && data.products.length > 0) {
          fetchedResults.push(data.products[0]);
        }
      }


      localStorage.setItem(cacheKey, JSON.stringify(fetchedResults));
      localStorage.setItem(`${cacheKey}_time`, now);

      setResults(fetchedResults);
      setLoading(false);
    }

    fetchData();
  }, []);

  
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
 
  console.log(results);


  return (
    <div className="flex items-center flex-col w-[100vw] overflow-x-hidden">
      <div
        className="w-[90%] h-[200px] md:w-[60%] md:h-[300px] bg-black mt-3 bg-cover bg-center bg-no-repeat shadow-[0_2px_4px_rgba(0,0,0,0.4),0_7px_13px_-3px_rgba(0,0,0,0.3),inset_0_-3px_0_rgba(0,0,0,0.2)]"
        style={{ backgroundImage: `url(${banner})` }}
      ></div>

      <div className="grid grid-cols-4 grid-rows-3 sm:gap-3 md:grid-cols-6 md:grid-rows-2 md:gap-5 w-[90%] md:w-[60%] p-3 place-items-center">
        {results.map((product) => (
          <div key={product.id} className="w-full h-full border-[1px] aspect-square flex items-center justify-center">
            <img src={product.thumbnail} alt={product.title} className="object-cover w-full h-full" />
             {console.log(product)}ee
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeContent;

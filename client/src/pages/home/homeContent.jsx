import { useEffect, useState } from "react";
import banner from "../../assets/banner.png";
import { useNavigate } from "react-router-dom";

function HomeContent() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const cacheKey = "homee-content";
  const navigate = useNavigate();

  useEffect(() => {
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
  
      setResults(JSON.parse(cachedData));
      setLoading(false);
      console.log(JSON.parse(cachedData));
      
      return;
    }

    const getItems = async () => {
      try {
        const categoriesRes = await fetch("https://dummyjson.com/products/categories");
        const categories = await categoriesRes.json();
     
         
        const fetchPromises = categories.map(async (category) => {
          const res = await fetch(`https://dummyjson.com/products/category/${category.slug}?limit=1`);
          const data = await res.json();
          return data.products?.[0];
        });

        const fetchedResults = (await Promise.all(fetchPromises)).filter(Boolean);

        localStorage.setItem(cacheKey, JSON.stringify(fetchedResults));
        setResults(fetchedResults);
  
        
      } catch (error) {
        console.error("Error fetching items:", error);
      } finally {
        setLoading(false);
      }
    };

    getItems();
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

  return (
    <div className="flex items-center flex-col w-[100vw] overflow-x-hidden">
      <div
        className="w-[90%] h-[200px] md:w-[60%] md:h-[300px] bg-black mt-3 bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${banner})` }}
      ></div>

      <div className="grid grid-cols-4 grid-rows-3 sm:gap-3 md:grid-cols-6 md:grid-rows-2 md:gap-5 w-[90%] md:w-[60%] p-3 place-items-center">
        {results.map((product) => (
          <div key={product.id} className="w-full h-full border-[1px] aspect-square flex items-center justify-center">
            <img src={product.thumbnail} alt={product.title} className="object-cover w-full h-full" />
             {console.log(product)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeContent;

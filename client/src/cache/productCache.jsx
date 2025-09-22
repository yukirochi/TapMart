import { useEffect, useState } from "react";
function ProductCache(url, cachedTime = 5 * 60 * 1000) {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    let ignore = false;

    const getdata = async () => {
      try {
        let cached = localStorage.getItem(url);
        if (cached) {
          let parsed = JSON.parse(cached);
          if (Date.now() < parsed.expiry) {
            setdata(parsed.data);
            setloading(false);
            return;
          } else {
            localStorage.removeItem(url);
          }
        }
        let res = await fetch(url);
        if (!res.ok) throw new Error("network error");
        let respdata = await res.json();

        if (!ignore) {
          setdata(respdata);
          localStorage.setItem(url,
            JSON.stringify({
                data: respdata,
                expiry: Date.now() + cachedTime
            })
          );
        }
      } catch (error) {
        console.error(error.message);
        if(!ignore) seterror(error);
      }finally{
        if(!ignore) setloading(false)
      }
    };
    getdata()
    return()=>{
        ignore = true
    }
  }, [url, cachedTime]);
  return {data, error, loading};
}

export default ProductCache;

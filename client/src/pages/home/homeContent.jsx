import banner from "../../assets/banner.png";
import useProductCache from "../../cache/productCache";




 function HomeContent() {
  return (
    <div className="flex items-center flex-col w-[100vw]  overflow-x-hidden">
      <div
        className="w-[90%] h-[200px] md:w-[60%] md:h-[300px] bg-black mt-3 bg-cover bg-center bg-no-repeat shadow-[0_2px_4px_rgba(0,0,0,0.4),0_7px_13px_-3px_rgba(0,0,0,0.3),inset_0_-3px_0_rgba(0,0,0,0.2)]"
        style={{ backgroundImage: `url(${banner})` }}
      ></div>
    <div className="grid grid-cols-4 grid-rows-3 sm:gap-3 md:grid-cols-6 md:grid-rows-2 md:gap-5 w-[90%] md:w-[60%] p-3 place-items-center">
  {Array.from({ length: 12 }).map((_, i) => (
    <div key={i} className="w-full h-full border-black border-[1px] aspect-square"></div>
  ))}
</div>

    </div>
  );
}

export default HomeContent;

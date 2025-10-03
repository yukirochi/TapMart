import banner from "../../assets/banner.png";
import useProductCache from "../../cache/productCache";
function HomeContent() {
  return (
    <div className="flex items-center flex-col w-[100vw] h-[100vh] overflow-x-hidden">
      <div
        className="w-[90%] h-[200px] md:w-[60%] md:h-[300px] bg-black mt-3 bg-cover bg-center bg-no-repeat shadow-[0_2px_4px_rgba(0,0,0,0.4),0_7px_13px_-3px_rgba(0,0,0,0.3),inset_0_-3px_0_rgba(0,0,0,0.2)]"
        style={{ backgroundImage: `url(${banner})` }}
      ></div>
      <div className="flex justify-center  gap-5 w-[90%] md:w-[60%] pt-3 pb-3  flex-wrap  ">
        <div className="md:w-[160px] md:h-[160px] w-[80px] h-[80px] bg-black"></div>
        <div className="md:w-[160px] md:h-[160px] w-[80px] h-[80px] bg-black"></div>
        <div className="md:w-[160px] md:h-[160px] w-[80px] h-[80px] bg-black"></div>
        <div className="md:w-[160px] md:h-[160px] w-[80px] h-[80px] bg-black"></div>
        <div className="md:w-[160px] md:h-[160px] w-[80px] h-[80px] bg-black"></div>
        <div className="md:w-[160px] md:h-[160px] w-[80px] h-[80px] bg-black"></div>
        <div className="md:w-[160px] md:h-[160px] w-[80px] h-[80px] bg-black"></div>
        <div className="md:w-[160px] md:h-[160px] w-[80px] h-[80px] bg-black"></div>
        <div className="md:w-[160px] md:h-[160px] w-[80px] h-[80px] bg-black"></div>
        <div className="md:w-[160px] md:h-[160px] w-[80px] h-[80px] bg-black"></div>
        <div className="md:w-[160px] md:h-[160px] w-[80px] h-[80px] bg-black"></div>
        <div className="md:w-[160px] md:h-[160px] w-[80px] h-[80px] bg-black"></div>
      </div>
    </div>
  );
}

export default HomeContent;

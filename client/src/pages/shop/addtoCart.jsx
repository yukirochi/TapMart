import { useUser } from "../../context/usercontext";

function AddtoCart() {
    let {togglecart} = useUser()
    return ( 
      <div className="fixed inset-0 bg-black/90 text-white z-[9999] flex items-center justify-center" onClick={()=>{
        togglecart()
      }}>
        <div className="w-[30%] min-w-[200px]  bg-white text-black" onClick={(e) => e.preventDefault()}>
              <div className="w-[]"></div>
        </div> 

    </div>

     );
}

export default AddtoCart;
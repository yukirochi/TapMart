import { useUser } from "../../context/usercontext";

function AddtoCart() {
    let {togglecart} = useUser()
    return ( 
      <div className="fixed inset-0 bg-black/90 text-white z-[9999] flex items-center justify-center" onClick={()=>{
        togglecart()
      }}>
        <div className="w-[100px] h-[100px] bg-white text-black" onClick={(e) => e.preventDefault()}>
                addtocart here
        </div>

    </div>

     );
}

export default AddtoCart;
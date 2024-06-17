// import { Link } from "react-router-dom";
// import { IoMdArrowForward } from "ereact-icons/io";
// import { FiTrash2 } from "ereact-icons/fi";
import CartItem from '../components/CartItem'
import { SidebarContext } from "../contexts/SidebarContext";
import { useContext } from "react";
import { IoMdArrowForward } from 'react-icons/io';
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
const{cart} = useContext(CartContext)
  return (
    <div
      className={`${isOpen ? "right-0" : "-right-full"} w-full bg-white fixed 
      top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all
      duration-300 z-20 px-4 lg:px-[35px] `}
    >
      <div className="flex items-center justify-between py-6 border-b">
      <div className="uppercase text-sm font-semibold">Shopping Bag(0)</div>
    {/* icon */}
        <div onClick={handleClose} className="cursor-pointer w-8 h-8 flex justify-center items-center">
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
    <div>{cart.map((item) => { //aici mapez peste cart care este componenta din useEffectul din CartContext,ea contine datele fiecarui produs pe care dai click sa il adaugi in cos,cand dau click pe plus mi-l adauga automat in sidebar(am facut lift state up,am luat stateul din CartContext si m am folosit de el aici cu ajutorul lui useContext)
      return <CartItem item={item} key={item.id}/>
    })}</div>
    </div>
  );
};

export default Sidebar;

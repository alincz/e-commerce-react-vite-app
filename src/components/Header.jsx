import { useContext, useEffect, useState } from "react";

//sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
//import icons
import { BsBag } from "react-icons/bs";
import Logo from "../images/descărcare.png";
const Header = () => {
  //header state
  const [isActive, setIsActive] = useState(true);

  const { isOpen, setIsOpen } = useContext(SidebarContext); //lui SidebarContext i-am adaugat la value
  //proprietatile setIsOpen si isOpen care sunt setter function-ul din stateul componentei si
  //isOpen contine valoarea default de false, iar aici facem destructurare de obiectate ca sa o accesez si sa le folosesc in comp asta
  //facand lift state up cu ajutorul lui useContext care cu ajutorul providerului
  //pot accesa acest state in orice componenta
  //cand dau click pe open/close sidebar se deschide si se inchide automat sidebar-ul

  const { itemAmount } = useContext(CartContext);

  //event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
      // Ce face: Verifică poziția verticală a scroll-ului (window.scrollY).
      //-- Dacă poziția scroll-ului este mai mare de 60 pixeli, setează setIsActive(true), activând astfel o stare.
      // --Dacă poziția scroll-ului este mai mică sau egală cu 60 pixeli, setează setIsActive(false), dezactivând starea.
      // Cum face: window.scrollY returnează numărul de pixeli la care documentul este derulat pe verticală.
    });
  }, []);
  //Codul din interiorul useEffect va fi executat după ce componenta este montată (rendered) pe DOM.
  //  window.addEventListener atașează o funcție anonimă care va fi apelată de fiecare dată când utilizatorul face scroll în fereastră.

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* Logo */}
        <Link to={"/"}>
          <div>
            <img className="w-[40px]" src={Logo} alt="" />
          </div>
        </Link>
        {/* cart */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative "
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

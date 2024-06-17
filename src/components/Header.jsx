import { useContext } from "react";

//sidebar context
import { SidebarContext } from "../contexts/SidebarContext";

//import icons
import { BsBag } from "react-icons/bs";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext); //lui SidebarContext i-am adaugat la value
  //proprietatile setIsOpen si isOpen care sunt setter function-ul din stateul componentei si
  //isOpen contine valoarea default de false, iar aici facem destructurare de obiectate ca sa o accesez si sa le folosesc in comp asta
  //facand lift state up cu ajutorul lui useContext care cu ajutorul providerului
  //pot accesa acest state in orice componenta

  //cand dau click pe open/close sidebar se deschide si se inchide automat sidebar-ul
  return (
    <header className="bg-pink-200">
      <div>Header</div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex relative"
      >
        <BsBag className="text-2xl" />
      </div>
    </header>
  );
};

export default Header;

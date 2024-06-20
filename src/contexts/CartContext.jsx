import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

//create context

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  //item amount state
  const [itemAmount, setItemAmount] = useState(0)
  
  
  
  //add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    //verific daca produsul este deja in cos
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    //daca este deja in cos
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  //remove from cart

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  //clear cart

  const clearCart = () => {
    setCart([]);
  };

  //increase amount
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  //decrease amount

  const decreaseAmount = (id) => {
    //Ce face: Caută articolul în coș care are id-ul egal cu cel primit ca parametru.
    //Cum face: Folosește metoda find a array-ului cart, care iterează prin toate elementele și returnează primul element care îndeplinește condiția item.id === id.
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    //Verificarea existenței articolului:
    // -- Ce face: Verifică dacă articolul a fost găsit în coș.
    // --Cum face: Dacă cartItem nu este undefined sau null, atunci intră în blocul if.
    if (cartItem) {
      //--creez  un nou coș cu cantitatea redusă pentru articolul respectiv:

      // Ce face: Creează un nou array newCart în care cantitatea (amount) articolului specific este redusă cu 1.
      // Cum face:
      // --Folosește metoda map pentru a crea un nou array.
      // --Dacă item.id este egal cu id:
      // --Creează un nou obiect (cu operatorul de răspândire { ...item }).
      // --Actualizează proprietatea amount a articolului la cartItem.amount - 1.
      // --Dacă item.id nu este egal cu id, returnează articolul așa cum este.
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      //Actualizarea stării coșului:
      setCart(newCart);
    }
    //Verificarea dacă cantitatea a devenit mai mică de 2:
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
    //Dacă cantitatea articolului în cartItem este mai mică de 2, atunci apelează funcția removeFromCart pentru a elimina articolul din coș.
  };

  // console.log(cart);
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default CartProvider;

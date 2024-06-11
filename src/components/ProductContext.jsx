import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
export const ProductContext = createContext();


const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
     setProducts(data)
    };
    fetchProducts()
  },[]);
  return <ProductContext.Provider value={{products}} >{children}</ProductContext.Provider>;
};
ProductProvider.propTypes={
  children: PropTypes.node.isRequired
}
export default ProductProvider;


//Aici facem fetch-ul catre API, folosesc createContext ca sa iau datele din aceasta componenta 
//si sa le pot folosi in altele.
//cu ajutorul providerului pot face lucrul asta pentru ca ia datele din interiorul componentei
//ii atribui o valoare custome (value) si ii pun in interiorul ei "products"-din useState care are
//in interiorul ei datele din API

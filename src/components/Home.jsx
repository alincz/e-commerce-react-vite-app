import { useContext } from "react";
import { ProductContext } from "./ProductContext";
import Product from "../components/Product";
const Home = () => {
  //get products from product context

  const { products } = useContext(ProductContext); //aici fac destructurare de obiecte
  //prin metoda asta{products}-ea se afla in interiorul comp ProductContext
  //ma folosesc de useContext ca sa iau datele din ProductContext
  //cu metoda filter,filtram datele din API ca sa imi returneze doar 2 categorii
  //si cu map le randez pe ecran

  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  console.log(filteredProducts);
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2
           lg:grid-cols-4 
           xl:grid-cols-5
           gap-[30px]
           max-w-sm
           mx-auto
           md:max-w-none 
           md:mx-0
           "
          >
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

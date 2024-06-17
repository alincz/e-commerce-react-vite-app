import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ProductProvider from "./contexts/ProductContext.jsx";
import "./index.css";
import SidebarProvider from "./contexts/SidebarContext.jsx";
import CartProvider from "./contexts/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);
// SidebarProvider:
// Motiv: Sidebar-ul este o componentă de interfață care poate influența modul de afișare al întregii aplicații. De aceea, este logic să fie primul în ordinea provider-ilor pentru a se asigura că toate componentele copil pot accesa și interacționa cu starea și funcționalitățile sidebar-ului.

// CartProvider:
// Motiv: Coșul de cumpărături este o funcționalitate centrală care poate influența multiple componente ale aplicației, cum ar fi componentele de produs sau checkout. Punerea lui înainte de ProductProvider asigură că orice componentă care ar putea avea nevoie să interacționeze cu coșul de cumpărături poate accesa contextul necesar

// ProductProvider:
// Motiv: ProductProvider gestionează datele despre produse, care sunt utilizate în majoritatea componentelor de afișare a produselor. Acesta este plasat ultimul în ordinea provider-ilor pentru că componentele care au nevoie de produse vor fi cele mai aproape de rădăcina structurii de componente, iar coșul de cumpărături și sidebar-ul pot funcționa independent de ProductProvider.


// De ce exact în această ordine și în main.jsx?
// Dependențele funcționale: Ordinea reflectă dependențele funcționale dintre contextele aplicate. De exemplu, componentele care depind de coșul de cumpărături trebuie să fie incluse în interiorul CartProvider, iar componentele care depind de produse trebuie să fie în interiorul ProductProvider.
// Accesibilitate: Toate componentele din aplicație au nevoie de acces la aceste contexte, și plasarea lor în main.jsx asigură că fiecare componentă poate accesa stările și funcționalitățile oferite de aceste contexte fără complicații suplimentare.
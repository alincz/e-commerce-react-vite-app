// import './App.css'
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ProductDetails from './pages/ProductDetails'
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="overflow-hidden">
    
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails/>} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

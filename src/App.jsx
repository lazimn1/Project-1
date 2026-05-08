import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Sample from "./Sample.jsx";
import Products from "./Products.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import ScrollToTop from "./ScrollTop.jsx";
import Cart from "./Cart.jsx";

export default function App() {
  return (
    <>
      <Router>
          <Navbar/>
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
      </Router>
      <About/>
      <Footer/>
    </>
  );
}

 

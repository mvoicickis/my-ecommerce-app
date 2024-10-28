// src/App.js
import React, { useState } from 'react';
import './App.css'; // Create your CSS file next
import Header from './components/Header';
import Product from './components/Product';
import RecommendedProducts from './components/RecommendedProducts';
import Footer from './components/Footer';




function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (quantity) => {
    setCartCount((prev) => prev + quantity);
  };

  const toggleLikeMenu = () => {
    // Implement functionality if needed
    console.log("Toggle like menu");
  };

  const toggleMenu = () => {
    // Implement functionality if needed
    console.log("Toggle menu");
  };

  return (
    <div className="App">
      <Header cartCount={cartCount} toggleLikeMenu={toggleLikeMenu} toggleMenu={toggleMenu} />
      <Product addToCart={addToCart} />
      <RecommendedProducts />
      <Footer />
    </div>
  );
}

export default App;


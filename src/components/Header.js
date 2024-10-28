// src/components/Header.js
import React from 'react';

const Header = ({ cartCount, toggleLikeMenu, toggleMenu }) => {
  return (
    <header className="header">
      <span className="logo">LOGO</span>
      <div className="header-options">
        <div className="icon" title="Cart">
          <button className="cart-button">&#128722;</button>
          <span id="cart-counter" className="cart-counter">{cartCount}</span>
        </div>
        <div className="icon" title="Search">
          <button className="search-button">&#128269;</button>
        </div>
        <div className="icon" title="Favorites">
          <button className="like-button" onClick={toggleLikeMenu}>&#9829;</button>
        </div>
        <div className="icon" title="Menu">
          <button className="menu-button" onClick={toggleMenu}>&#9776;</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

// src/components/Product.js
import React, { useState } from 'react';

const Product = ({ addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSwatch, setSelectedSwatch] = useState(null);

  const selectSwatch = (swatch) => {
    setSelectedSwatch(swatch);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <main className="container">
      <img
        src="https://www.sporcle.com/blog/wp-content/uploads/2017/03/sorting-hat.png"
        alt="Product"
        className="product-image"
      />
      <div className="product-info">
        <h1 className="product-title">Sorting Hat</h1>
        <div className="star-rating">
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span className="rating-text">4 out of 5</span>
        </div>
        <p className="product-price">$49.99</p>

        <div className="swatches">
          <div className="description">Choose a size:</div>
          {['S', 'M', 'L'].map((size) => (
            <div
              key={size}
              className={`swatch ${selectedSwatch === size ? 'selected' : ''}`}
              onClick={() => selectSwatch(size)}
            >
              {size}
            </div>
          ))}
        </div>

        <div className="quantity-counter">
          <button className="quantity-button" onClick={decreaseQuantity}>-</button>
          <input type="number" id="quantity" className="quantity-display" value={quantity} readOnly />
          <button className="quantity-button" onClick={increaseQuantity}>+</button>
        </div>

        <button className="add-to-cart" onClick={() => addToCart(quantity)}>Add to Cart</button>
      </div>
    </main>
  );
};

export default Product;

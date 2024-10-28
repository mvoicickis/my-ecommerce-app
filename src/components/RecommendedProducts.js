// src/components/RecommendedProducts.js
import React from 'react';

const RecommendedProducts = () => {
  const products = [
    {
      img: 'https://naptoyshop.com/cdn/shop/files/hpwh1.webp?v=1698768221&width=1445',
      title: 'Harry Potter Wand',
    },
    {
      img: 'https://i.ebayimg.com/images/g/~HsAAOSw89JlzSwb/s-l1200.jpg',
      title: 'Hedwig Plush',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROfsX9N7CpyhZxo_McARaJdLhvyxH1txY14A&s',
      title: 'Gryffindor Scarf',
    },
  ];

  return (
    <section className="recommended-products">
      <h2>You May Also Like</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-item" key={index}>
            <img src={product.img} alt={product.title} className="recommended-image" />
            <p>{product.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedProducts;

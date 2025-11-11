import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";

import "../../app/Styles/Product.css";

export const Products = ({ addToCart, products }) => {
  return (
    
      <div className="card">
        <div className="products-container">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Products;

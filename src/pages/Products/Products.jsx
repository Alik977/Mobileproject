import React, { useEffect,useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import "..//..//pages/..//app/Styles/../Styles/product.css";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);
  return (
    <div className="products-container">
      {products.map((product) => 
        <ProductCard key={product.id} product={product}/>
      )}
    </div>
  );
};

export default Products;

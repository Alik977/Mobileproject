import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../../app/App";
import { Error } from "../../components/Error/Error";
import "../../app/Styles/products.css";

export const Product = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
  
    instance.get(`/products/${id}`)
      .then((res) => {
        if (!res.data) {
          setError(true);
        } else {
          setProduct(res.data);
        }
      })
      .catch(() => setError(true));
  }, [id]);
  useEffect(() => {
    if (product) {
      localStorage.setItem("title", product.id);
    }
  }, [product]);

  if (error) return <Error />; 

  if (!product) return <div>Loading...</div>;

  return (
    <div className="boxmini">
      <h1 className="h1title">{product.title}</h1>
      <div className="image">
        <img src={product.image} alt={product.title} style={{ width: "400px" }} />
      </div>
      <div className="description">{product.description}</div>
      {product.price && <div className="price">💰 Գինը: ${product.price}</div>}
    </div>
  );
};

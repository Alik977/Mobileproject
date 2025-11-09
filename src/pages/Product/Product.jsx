import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../../app/App";
import "../../app/Styles/product.css";

export const Product = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    instance.get(`/products/${id}`).then((res) => setProduct(res.data));
  }, [id]);

  return (
    <div className="boxmini">
      <h1 className="h1title">{product?.title}</h1>

      <div className="image">
        <img src={product?.image} alt={product?.title} />
      </div>
      <div className="description">{product?.description}</div>
    </div>
  );
};

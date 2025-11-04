import React from "react";
import "..//..//pages/..//app/Styles/../Styles/Productcard.css";
const ProductCard = ({ product }) => {
  return (
    <div className="block" >
      <div className="card">
        <h2 className="nameblok">{product.title}</h2>
        <img width={200} src={product.image} alt="" className="imgcard" />
      </div>
    </div>
  );
};

export default ProductCard;

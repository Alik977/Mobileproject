import React from "react";
import Button from "@mui/material/Button";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import "../../app/Styles/Productcard.css"; 

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img
        src={product.image}
        alt={product.title}
        className="imgcard"
      />
      <h2 className="nameblok">{product.title}</h2>
      <div className="price-and-btn">
        <span className="price">{product.price ? `$${product.price}` : ""}</span>
        <Button
          variant="contained"
          color="primary"
          endIcon={<LocalMallIcon />}
          sx={{ mt: 1, width: "100%" }}
        >
          Buy
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

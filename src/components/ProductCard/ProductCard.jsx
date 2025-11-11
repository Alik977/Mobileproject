import React from "react";
import { Card, CardActionArea, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function ProductCard({ product, addToCart }) {
  return (
    <Card sx={{ width: 300 }}>
      <Box component={NavLink} to={`/products/${product.id}`}>
        <CardActionArea>
         <CardMedia
  component="img"
  height="400"
  image={product.image}   
  alt={product.title}
/>
          <CardContent >
            <Typography >
              {product.title.length <= 20 ? product.title : `${product.title.slice(0, 20)}...`}
            </Typography>
            <Typography color="text.secondary">${product.price}</Typography>
          </CardContent>
        </CardActionArea>
      </Box>

      <Button
        onClick={() => addToCart(product)}
        sx={{ width: "100%" }}
        startIcon={<ShoppingCartIcon />}
        variant="contained"
      >
        Buy
      </Button>
    </Card>
  );
}

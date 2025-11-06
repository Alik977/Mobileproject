import React from 'react'
import { Button, Card,CardContent,CardMedia,Typography,CardActionArea, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';

export default function ProductCard({product, addToCart}) {

 
  return (
    <Card sx={{ width: '300px' }}>
      <Box
      component={NavLink}
      to={`/products/${product.id}`}
      >
      <CardActionArea >
        <CardMedia
          component="img"
          height='400'
          width='800'
          image={product.image}
          alt="green iguana"
          className='card'
        />
        <CardContent className='products-container'>
          <Typography gutterBottom variant="body1"  component="div"  > 
            {
              product.title.length <= 20 ? product.title : `${product.title.slice(0, 20)} ... `
            }
          </Typography>
        </CardContent>
      </CardActionArea>
      </Box>
      <Button
      onClick={() => addToCart(product)}
      sx={{width : '100%'}}
      startIcon={<ShoppingCartIcon /> }
      variant='contained'
      >
        Buy
      </Button>
    </Card>
  );
}

import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div>
<h2>{product.title}</h2>
<img src={product.image} alt="" />
    </div>
  )
}

export default ProductCard
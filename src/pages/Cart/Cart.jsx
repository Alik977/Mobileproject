import React, { useState } from 'react'
import { CartItem } from '../../components/CartItem/Cartitem.jsx';


export const Cart = ({ cart, updateCart }) => {
  
  return (
    <div>
      <ul>
        {
          cart.map((c) => {
            return < CartItem key={c.id} cart={c} updateCart={updateCart}/>
          })
        }
      </ul>
    </div>
  )
}

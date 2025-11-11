import React, { useState } from "react";
import { CartItem } from "../../components/CartItem/CartItem";
import RegistrationForm from "../../components/Registration/RegistrationForm";
import "./Cart.css";

export const Cart = ({ cart, updateCart, removeFromCart }) => {
  const [openReg, setOpenReg] = useState(false);

  return (
    <div className="cart-wrapper">
      <ul>
        {cart.map(c => (
          <CartItem
            key={c.id}
            cart={c}
            updateCart={updateCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </ul>

      <div className="register-box">
        <button className="open-reg-btn" onClick={() => setOpenReg(true)}>
          Գրանցվել 📲
        </button>
      </div>

      {openReg && (
        <div className="reg-modal-overlay">
          <div className="reg-modal">
            <button className="close-reg" onClick={() => setOpenReg(false)}>
              ✖
            </button>
            <RegistrationForm/>
          </div>
        </div>
      )}
    </div>
  );
};

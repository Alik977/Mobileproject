import React, { useState } from "react";
import ".//..//CartItem/CartItem.css";

export const CartItem = ({ cart, updateCart, removeFromCart }) => {
  const [count, setCount] = useState(cart.count);
  const [bought, setBought] = useState(false); 

  const plus = () => {
    setCount((prev) => {
      const newCount = prev + 1;
      updateCart(newCount, cart.id);
      return newCount;
    });
  };

  const minus = () => {
    setCount((prev) => {
      if (prev > 1) {
        const newCount = prev - 1;
        updateCart(newCount, cart.id);
        return newCount;
      }
      return prev;
    });
  };

  const clear = () => {
    removeFromCart(cart.id);
  };

  const handleBuy = () => {
    setBought(true);
  };

  return (
    <div className={`cartbox ${bought ? "bought" : ""}`}>
      <li
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="minibox">
          <img width={400} src={cart.image} className="cartitem" />
        </div>

        <div>
          <button onClick={plus} style={{ width: "100px" }} className="plus">
            ➕
          </button>
          <span className="count">{count}</span>
          <button onClick={minus} style={{ width: "100px" }} className="minus">
            ➖
          </button>
        </div>

        <div>
          <h5 className="price1">{cart.initPrice.toFixed(2)}$</h5>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {!bought ? (
            <button onClick={handleBuy} className="buy-btn">
              Գնել 💸
            </button>
          ) : (
            <span className="bought-label">Գնված է ✅</span>
          )}

          <button onClick={clear} style={{ width: "100px" }} className="clear">
            🚫
          </button>
        </div>
      </li>
    </div>
  );
};

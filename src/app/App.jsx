import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import { Layout } from "../components/Layout/Layout";
import { Home } from "../pages/Home/Home";
import { Products } from "../pages/Products/Products";
import { Cart } from "../pages/Cart/Cart";
import { Product } from "../pages/Product/Product";
import { Error } from "../components/Error/Error";
import "./styles/App.css";

export const instance = axios.create({
  baseURL: "http://localhost:3001/",
});

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const cartLength = cart.length;

  let tiv = cart.reduce((acum, el) => el.initPrice + acum, 0);

  const addToCart = (item) => {
    let found = false;
    cart.forEach((el) => {
      if (el.id === item.id) {
        found = true;
        setCart(
          cart.map((c) => {
            if (c.id === item.id) {
              return {
                ...c,
                count: c.count + 1,
                initPrice: (c.count + 1) * c.price,
              };
            }
            return c;
          })
        );
      }
    });

    if (!found) {
      setCart((prev) => [
        ...prev,
        { ...item, count: 1, initPrice: item.price },
      ]);
    }
  };

  const updateCart = (count, id) => {
    setCart(
      cart.map((c) => {
        if (c.id === id) {
          return {
            ...c,
            count: count,
            initPrice: count * c.price,
          };
        }
        return c;
      })
    );
  };

  useEffect(() => {
    instance
      .get("/products")
      .then((res) =>
        setProducts(
          res.data.map((el) => ({
            ...el,
            count: 1,
            initPrice: el.price,
          }))
        )
      )
      .catch((err) => console.error(err));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout cartLength={cartLength} />}>
        <Route index element={<Home />} />
        <Route
          path="/products"
          element={<Products products={products} addToCart={addToCart} />}
        />
        <Route path="/products/:id" element={<Product />} />
        <Route
          path="/carts"
          element={<Cart cart={cart} updateCart={updateCart} />}
        />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;

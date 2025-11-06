
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'


import { Layout } from '../components/Layout/Layout'
import { Home } from '../pages/Home/Home'
import { Products } from '../pages/Products/Products'
import { Cart } from '../pages/Cart/Cart'
import { Product } from '../pages/Product/Product'


import './styles/App.css'

export const instance = axios.create({
  baseURL : 'https://fakestoreapi.com'
})

// [{id}, {id}] => 

function App() {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  const cartLength = cart.length

  let tiv = cart.reduce((acum, el) => el.initPrice + acum, 0)

  
  const addToCart = (item) => {
  
    let bool = false
    cart.forEach((el) => {

      if(el.id === item.id){
        bool = true
        setCart(cart.map((c) => {
          if(c.id === item.id){
            return {
              ...c,
              count : ++c.count,
              initPrice : c.count * c.price
            }
          }else {
            return c
          }
        }))
        
      }
    })

    if(!bool){
      setCart((prev) => {
        return [...prev, item]
      })
    }
  }


  const updateCart = (count, id) => {
    setCart(cart.map((c) => {
      if(c.id === id){
        return {
          ...c,
          count : count,
          initPrice : count * c.price
        }
      }else {
        return c
      }
    }))
  }

  useEffect(() => {
    instance.get('/products')
      .then((res) => setProducts(res.data.map((el) => ({...el, count : 1, initPrice : el.price}))))
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout cartLength={cartLength}/>}>
          <Route index element={<Home />} />
          <Route path='/products' element={<Products products={products} addToCart={addToCart}/>} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='/carts' element={<Cart cart={cart} updateCart={updateCart}/> }/>
        </Route>
      </Routes>
    </>
  )
}

export default App

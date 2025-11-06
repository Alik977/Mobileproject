import React, {useState} from 'react'

export const CartItem = ({cart, updateCart}) => {
    let [count, setCount] = useState(cart.count);


    const plus = () => {
        setCount(++count)
        updateCart(count, cart.id)
    }
   
    const minus = () => {
        if(count > 1){
            setCount(--count)
            updateCart(count, cart.id)
        }
    }
    return (
        <li
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
            <div>
                <img width={80} src={cart.image} />
            </div>
            <div>
                <button onClick={plus} style={{ width: '50px' }}>+</button>
                <span>{count}</span>
                <button onClick={minus} style={{ width: '50px' }} >-</button>
            </div>
            <div>
                <h5>{cart.initPrice.toFixed(2)}$</h5>
            </div>
        </li>
    )
}

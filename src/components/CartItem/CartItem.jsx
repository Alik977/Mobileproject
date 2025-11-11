import React, {useState} from 'react'

import ".//..//CartItem/CartItem.css"
export const CartItem = ({cart, updateCart,removeFromCart}) => {
    let [count, setCount] = useState(cart.count);


    const plus = () => {
    setCount(prev => {
        const newCount = prev + 1;
        updateCart(newCount, cart.id);
        return newCount;
    });
}

const minus = () => {
    setCount(prev => {
        if(prev > 1){
            const newCount = prev - 1;
            updateCart(newCount, cart.id);
            return newCount;
        }
        return prev;
    });
}
const clear = () => {
  removeFromCart(cart.id);

};
    return (
        
       
        <div className='cartbox'> 
        <div className='regbutton'> </div>
        <li
        
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
            
            <div className='minibox'>
                <img width={400} src={cart.image} className='cartitem'/>
            </div>
            <div>
                <button onClick={plus} style={{ width: '100px' }} className='plus'>➕</button>
                <span className='count'>{count}</span>
                <button onClick={minus} style={{ width: '100px' }} className='minus'>➖</button>
            </div>
            <div>
                <h5 className='price1'>{cart.initPrice.toFixed(2)}$</h5>
                
            </div>
            <button onClick={clear} style={{ width: '100px' }} className='clear'>🚫</button>
        </li>
        <div className='reg'>

        </div>
        </div>
    )
}

import React, {useState} from 'react'

export const CartItem = ({cart, updateCart}) => {
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

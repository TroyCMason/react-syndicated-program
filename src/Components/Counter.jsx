import React, { useState } from 'react';
import './Counter.css'

function Counter () {
   const[cart, setCart] = useState ({
 item: " apple",
 quantity: 0
   });

function removeApplw () {
    setCart((prevCart) => ({
        ...prevCart,
        quatity : prevCart.cart - 1
    }))
}

   function addApple(){
    setCart(prevCart => ({
        ...prevCart,
        quantity: prevCart.quantity + 1,
    }))
   }
    return (
        <div>
            <button onClick={()=>null}>-</button>
            {cart.quatity}
            {cart.item}
            <button onClick={() => null}>+</button>
        </div>
    ) 
}

export default Counter
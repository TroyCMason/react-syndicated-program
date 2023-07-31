import React, { useState } from 'react';
import './Counter.css'

   function Counter(){
const [arr,setArr] = useState([])

function addPlus () {
setArr(prevArr => [...prevARR, "+"])
}

function addMinus (){
setArr()
}

    return (
        <div>
            <button onClick={addMinus}>-</button>
            <button onClick={addPlus}>+</button>
        </div>
    )};


export default Counter;
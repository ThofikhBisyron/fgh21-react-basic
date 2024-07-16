import React from "react";
import { useState } from "react";
import "../assets/style.css"



function Counter(){
    let [count, set] = React.useState(0)
    function min(){
        count = count - 1
        set(count)

    }
    function plus(){
        count = count + 1
        set(count)
    }
    if (count >= 11){
        count = 0
    }
    if (count <= -1){
        count = 10
    }
return(
    <div >
        <div className="container">
            <button onClick={min}>-</button>
            <div>{count}</div>
            <button onClick={plus}>+</button>
        </div>
    </div>
        
    
    )
}

export default Counter
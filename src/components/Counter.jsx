import React, { useState } from "react";

const Counter = ( ) => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };
    
    return (
     <div>
         <h1>Contador</h1>
         <p>El valor actual es: {count}</p>
         <button onClick={handleIncrement}>mostrar/ocultar</button>
         <button onClick={handleDecrement}>mostrar/ocultar</button>
     </div>
    );
}

export default Counter;
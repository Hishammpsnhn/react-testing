import React, { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);
    const [amount, setAmount] = useState(0);
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>Inc</button>
            <input type="number" value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} />
            <button onClick={() => setCount(amount)}>set</button>
        </div>
    );
};

export default Counter;

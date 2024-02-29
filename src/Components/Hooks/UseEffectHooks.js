import React, { useState, useEffect } from "react";

const UseEffectHooks = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {

        console.log("component is mount");

        return () => {
            console.log("component is unmount");
        }

    })

    useEffect(() => {
        console.log("count has changed", count);
    })


    return (
        <>
        <h1>Counter App Using UseEffect</h1>

        <h3>Count is :- {count}</h3>

        <button onClick={() => setCount(count + 1)} >Increment</button>
        <button onClick={() => setCount(count - 1)} >Decrement</button>
        </>
    )
} 

export default UseEffectHooks;
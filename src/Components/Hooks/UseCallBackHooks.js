import React, { useState, useCallback } from "react";

const UseCallBackHooks = () => {

    const [count, setCount] = useState(0);

    const inc = useCallback(() => {
        setCount((preCount) => preCount + 1);
    }, []);

    return (
        <>
            <h1>Counter App Using useCallback Hooks</h1>

            <p>Count is : {count}</p>

            <ChildComponent inc={inc} />
        </>
    )
}

export default UseCallBackHooks;

const ChildComponent = ({ inc }) => {
    return (
        <>
        <h3> Child Component</h3>

        <button onClick={inc}>Increment</button>
        </>
    )
};
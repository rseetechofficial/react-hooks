import React, { useState, useMemo } from "react";

const UseMemoHooks = () => {

    const [number, setNumber] = useState(0);

    const squareNumber = useMemo(() => {
        return number * number;
    }, [number]);

    return (

        <>
        <h1>UseMemo Hooks Example</h1>

        <p>
            Enter Your Number:
            <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value, 10))} />
        </p>

        <h4>
            Squared Number :- {squareNumber}
        </h4>
        </>
    )
};


export default UseMemoHooks;
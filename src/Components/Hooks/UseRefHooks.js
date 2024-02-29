import React, { useRef } from "react";

const UseRefHooks = () => {
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <>
        <h1>Input Focus App Using useRef Hooks</h1>

        <input type="text" ref={inputRef} placeholder="Enter here" />

        <button onClick={focusInput}>Focus Input</button>
        </>
    )
};

export default UseRefHooks;
import { useReducer } from "react";

function reducer(state, dispach){
    switch(dispach.type) {
        case "inc":
            return state + 1;

            case "dec": 
                return state - 1;

                default: 
                    throw new Error();
    }
};

const UseReducerHooks = () => {

    const [count, dispach] = useReducer(reducer, 0);

    return (
        <>
      
        <h1>Counter App using UseReducer Hooks</h1>

        <h4>{count}</h4>

        <div>
            <button onClick={() => { dispach({ type: "inc"}) }} >Increment</button>
            <button onClick={() => { dispach({ type: "dec"}) }} >Decrement</button>
        </div>
        </>
        
    )
}

export default UseReducerHooks;
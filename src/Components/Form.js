import React from "react";
import useFormInput from "./Hooks/useFormInput";

const Form = () => {

    const firstName = useFormInput('');
    const lastName = useFormInput('');

    return (
        <>
            <h1> React App Using Custom Hook</h1>

            <form>
                <label>
                    First Name
                    <input type="text" {...firstName} />
                </label>
            <br />
            <br />
                <label>
                    Last Name
                    <input type="text" {...lastName} />
                </label>

                <br />
                <br />

                <button type="button" onClick={() => firstName.reset()}> Reset First Name</button>
                <button type="button" onClick={() => lastName.reset()}> Reset Last Name</button>
            
            </form>
            <br />
            <br />
            <h3>Full Name : { firstName.value} {lastName.value}</h3>
        </>
    )
};

export default Form;
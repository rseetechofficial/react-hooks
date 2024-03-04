import { useState } from "react";

const useFormInput = (defaultValue) => {

    const [value, setValue] = useState(defaultValue);

    const reset = () => {
        setValue(defaultValue);
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return {
        value, onChange: handleChange, reset
    }
};

export default useFormInput;
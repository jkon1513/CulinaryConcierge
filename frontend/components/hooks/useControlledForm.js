import { useState } from "react";

export default function useControlledForm(initialVal = "") {
    const [formVal, setFormVal] = useState(initialVal);
    const update = (evt) => {
        setFormVal(evt.target.value);
    }
    const reset = () => {
        setFormVal(initialVal);
    }

    return [formVal, update, reset];
}
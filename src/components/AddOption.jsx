import { useState } from "react";

import "../styles/AddOption.css";

function AddOption ({setOptionsList}) {
    const [value, setValue] = useState('');

    const handleInputChange = (e) => {
        setValue(e.target.value);
    }

    const handleInputSubmit = (e) => {
        e.preventDefault();
        console.log(value);
        setOptionsList((prevState) => {
            if(prevState.includes(value))
                return prevState;
            else
                return [...prevState, value];
        });

        setValue('');
    }

    return (
        <form className='add-option' onSubmit={handleInputSubmit}>
            <input type="text" placeholder="Add More Options" value={value} onChange={handleInputChange} required />
            <button type="submit">Add Option</button>
        </form>
    );
}

export default AddOption;
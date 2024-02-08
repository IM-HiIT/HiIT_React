import { useState } from "react";

function MyForm () {

    //const [name, setName] = useState("");
    const [inputs, setInputs] = useState({name:'', age: ''});


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log("Value: " +value);
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Your name is ${inputs.name} and you were born on ${inputs.age}`);
        console.log("Inputs: "+inputs);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input 
                    type="text"
                    name="name"
                    value={inputs.name}
                    onChange={handleChange} 
                />
            </label>
            <label>Enter your age:
                <input 
                    type="date"
                    name="age"
                    value={inputs.age}
                    onChange={handleChange} 
                />
            </label>
            <input type="submit" />
        </form>
    )
};

export default MyForm;
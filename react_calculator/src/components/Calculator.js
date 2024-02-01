import React, {useState} from 'react'
import './Calculator.css'
import Button from './Button';
import Input from './Input';

function Calculator() {
    const [input, setInput] = useState("");
    const addToInput = (value) => {
        setInput(input + value);
    };

    const clearInput = () => {
        setInput(previousState => {
            return {
                ...previousState, input: "",
            }
        });
    }

    return ( 
        <div className="calc-wrapper">
            <Input value={input} />
            <div className="calc-row">
                <Button value='7' handleClick={addToInput} />
                <Button value='8' handleClick={addToInput} />
                <Button value='9' handleClick={addToInput} />
                <Button value='*' handleClick={addToInput} />
            </div>
            <div className="calc-row">
                <Button value='4' handleClick={addToInput} />
                <Button value='5' handleClick={addToInput} />
                <Button value='6' handleClick={addToInput} />
                <Button value='-' handleClick={addToInput} />
            </div>
            <div className="calc-row">
                <Button value='1' handleClick={addToInput} />
                <Button value='2' handleClick={addToInput} />
                <Button value='3' handleClick={addToInput} />
                <Button value='+' handleClick={addToInput} />
            </div>
            <div className="calc-row">
                <Button value='C' handleClick={clearInput} />
                <Button value='0' handleClick={addToInput} />
                <Button value=',' handleClick={addToInput} />
                <Button value='=' handleClick={addToInput} />
            </div>
        </div>
    );
}

export default Calculator;
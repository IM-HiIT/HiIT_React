import './Calculator.css'
import Button from './Button';
import Input from './Input';

function Calculator() {
    return ( 
        <div className="calc-wrapper">
            <Input />
            <div className="calc-row">
                <Button value='7'/>
                <Button value='8'/>
                <Button value='9'/>
                <Button value='*'/>
            </div>
            <div className="calc-row">
                <Button value='4'/>
                <Button value='5'/>
                <Button value='6'/>
                <Button value='-'/>
            </div>
            <div className="calc-row">
                <Button value='1'/>
                <Button value='2'/>
                <Button value='3'/>
                <Button value='+'/>
            </div>
            <div className="calc-row">
                <Button value='C'/>
                <Button value='0'/>
                <Button value=','/>
                <Button value='='/>
            </div>
        </div>
    );
}

export default Calculator;
import './Input.css'

function Input(props) {
    return ( 
        <input className='calc-input' defaultValue={props.value} ></input>
    );
}

export default Input;
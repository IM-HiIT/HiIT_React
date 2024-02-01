import './Button.css'

function Button(props) {
    // Return value on Click
    function buttonClick () {
        props.handleClick(props.value);
    }

    // React event 
    return ( 
        <button 
         type='button' 
         className="calc-button" 
         onClick={buttonClick}>
            {props.value}
        </button>
    );
}

export default Button;
import './Button.css'

function Button(props) {
    // Return value on Click
    function buttonClick (value, e) {
        console.log("V: "+value);
        console.log("E: "+e.type);
    }

    // React event 
    return ( 
        <button 
         type='button' 
         className="calc-button" 
         onClick={(event) => buttonClick(props.value, event)}>
            {props.value}
        </button>
    );
}

export default Button;
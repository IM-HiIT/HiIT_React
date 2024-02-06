import { useEffect, useRef } from "react";


function FocusAfterLoad(){
    const elementRef = useRef();
    
    useEffect(() => {
        elementRef.current.focus();
    }, []);

    console.log(elementRef.current); //Undefinded
    return (
        <>
        <input ref={elementRef} type="text" />
        </>
    );
}

export default FocusAfterLoad;
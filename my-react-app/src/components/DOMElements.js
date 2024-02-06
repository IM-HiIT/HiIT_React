import { useEffect, useRef } from "react";

function DOMElements() {
    const elementRef = useRef();

    useEffect(() => {
        const divElement = elementRef.current;
        console.log(divElement);
    }, []);

    return (
        <span ref={elementRef}>I'm an Element!</span>
    )
}
export default DOMElements
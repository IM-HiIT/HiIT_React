import { useState } from "react";

/** Car
 * 
 * @param {*} props invoerwaarde
 * @returns Title with Car brand name
 */
function Car(props) {
    const [car, setCar] = useState({
        brand: props.brand,
        model: "107",
        year: "2016",
        color: "white"
    });

    const updateColor = () => {
        setCar(previousState => {
            return { ...previousState, color: "black" }
        });
    }

    return (
        <>
        <h1>{props.brand}</h1>
        <p>A {car.color} {props.brand} {car.model} from {car.year}.</p>
        <button type="button" onClick={updateColor}>Change color</button>
        </>
    )
}

export default Car;
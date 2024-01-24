import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

/** JSX
 * https://db.stichtingheldeninit.nl/lessons/11073/
 * No JSX syntax
 */
const myElement = React.createElement('h1', {}, 'Hello React');

/** expressie
 */
const currYear = new Date().getFullYear();
const myFirstElement = <h1>It is {currYear}</h1>

/** elementen nesten
 */
const myFirstList = (<ul><li>Blauw</li><li>Oranje</li><li>Rood</li><li>Zwart</li></ul>);

/** 2 paragrafen
 */
const myFirstPara = (<section><p>Paragraaf 1</p><p>Paragraaf 2</p></section>);

/** De class eigenschap
 */
const mySecondPara = (<><p className='myPara'>Paragraaf 3</p><p className='myPara'>Paragraaf 4</p></>);

/** IF Statement Ternary Operator
 */
const hour = new Date().getHours();
let myGreeting = <h1>{hour < 12 ? "Good Morning" : "Good Evening"}</h1>;

//root.render(myGreeting);

/** Function Components
 */
function Vehicle() {
  return <h1>Hi, I'm a car!</h1>
}

/** Props
 * 
 * @param {*} props 
 * @returns 
 */
function Cars(props) {
  return <h1>Hi, I am a {props.brand}</h1>
}
// root.render(<Cars brand="Volvo"/>);

/** Nesten
 * 
 * @returns Car brands
 */
function Brand() {
  return (<><Cars brand="Volvo"/><Cars brand="Peugeot"/><Cars brand="Mercedes"/></>
  );
}

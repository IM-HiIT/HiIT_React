// Prop Use Context
import React, { createContext, useContext, useState } from 'react';


const UserContext = createContext('');
/** Component1
 * 
 * @returns - Component2
 */
function PropUseContext() {
    const [user, setUser] = useState("Jane Doe");
    return (
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}!`}</h1>
            <Component2 />
        </UserContext.Provider>
    );
}

/** Component2
 * 
 * @returns - Component3
 */
function Component2() {
    return (
        <>
        <h1>Component2</h1>
        <Component3 />
        </>
    );
}

/** Component3
 * 
 * @returns - Component4
 */
function Component3() {
    return (
        <>
        <h1>Component3</h1>
        <Component4 />
        </>
    );
}

/** Component4
 * 
 * @returns - Component5
 */
function Component4() {
    return (
        <>
        <h1>Component4</h1>
        <Component5 />
        </>
    );
}

/** Component5
 * 
 * @param {*} user - Gets User from Component4
 * @returns - Component5
 */
function Component5() {
    const user = useContext(UserContext);
    return (
        <>
        <h1>Component5</h1>
        <h2>{`Hello again, again ${user}!`}</h2>
        </>
    );
}
export default PropUseContext;
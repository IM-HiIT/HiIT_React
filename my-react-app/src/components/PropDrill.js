// Prop Drilling
import React, { useState } from 'react';

/** Component1
 * 
 * @returns - user to Component2
 */
function PropDrill() {
    const [user, setUser] = useState("Jane Doe");
    return (
        <>
        <h1>{`Hello ${user}!`}</h1>
        <Component2 user={user} />
        </>
    );
}

/** Component2
 * 
 * @param {*} user - Gets User from Component1 
 * @returns - user to Component3
 */
function Component2( {user} ) {
    return (
        <>
        <h1>Component2</h1>
        <Component3 user={user} />
        </>
    );
}

/** Component3
 * 
 * @param {*} user - Gets User from Component2 
 * @returns - user to Component4
 */
function Component3( {user} ) {
    return (
        <>
        <h1>Component3</h1>
        <Component4 user={user} />
        </>
    );
}

/** Component4
 * 
 * @param {*} user - Gets User from Component3
 * @returns - user to Component5
 */
function Component4( {user} ) {
    return (
        <>
        <h1>Component4</h1>
        <Component5 user={user} />
        </>
    );
}

/** Component5
 * 
 * @param {*} user - Gets User from Component4
 * @returns - Component5
 */
function Component5( {user} ) {
    return (
        <>
        <h1>Component5</h1>
        <h2>{`Hello again ${user}!`}</h2>
        </>
    );
}
export default PropDrill;
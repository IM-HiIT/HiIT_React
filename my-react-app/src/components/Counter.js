import { useReducer } from "react";

const initialState = {count: 0};

function reducer(state, action){
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        case 'incrementBy':
            return {count: state.count + action.number};
        case 'decrementBy':
            return {count: state.count - action.number};
        default:
            throw new Error();
    }
}

function Counter(){
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <>
            Count: {state.count}
            <br></br>
            <button onClick={() => dispatch({type: 'decrementBy', number: 10})}>-10</button>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <button onClick={() => dispatch({type: 'incrementBy', number: 10})}>+10</button>
        </>
    )
}
export default Counter;
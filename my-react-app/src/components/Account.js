import { useReducer } from "react";

function Account() {
    const initialState = {
        firstName: '',
        lastName: '',
        password: '',
        repeatPassword: '',
        email: '',
    };

    function reducer(state, action) {
        switch (action.type) {
            case 'changeValue':
                return {...state, [action.field]: action.value};
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
        Value: {state.firstName}
        <button onClick={() => dispatch({
            type: 'changeValue',
            field: 'firstName',
            value: 'Upmostly'
        })}>Change value</button>
        </>
    );
}

export default Account;
import React, {useState, useCallback, useMemo} from 'react';
import ReactDOM from 'react-dom/client';
import User from './components/User.js';
import useFetch from './useFetch.js';

/**
 * 
 * @param {*} num 
 * @returns 
 */
const expensiveCalc = (num) => {
    console.log("Calculating....");
    for (let i = 0; i < 10000; i++) {
        num += 1;
    }
    return num;
};

/**
 * 
 * @returns 
 */
function Users() {
    const [users] = useFetch();
    const [count, setCount] = useState(0);
    const calculation = useMemo(() => expensiveCalc(count), [count]);

    const onItemClick = useCallback((event) => {
        console.log("Clicked: ", event.currentTarget);
    }, [users]);

    const increment = () => {
        setCount((c) => c + 1 );
    }

    return (
        <>
        <User users={users} onItemClick={onItemClick} />
        <div>
            Count: {count}
            <button onClick={increment}>+</button>
            <p>Looong calculation... {calculation}</p>
        </div>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Users />);
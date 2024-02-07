import React, {useState, useEffect, useCallback, useMemo} from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import User from './components/User.js';


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
    const [users, setUsers] = useState([]);
    const [count, setCount] = useState(0);

    const calculation = useMemo(() => expensiveCalc(count), [count]);

    const onItemClick = useCallback((event) => {
        console.log("Clicked: ", event.currentTarget);
    }, [users]);

    const increment = () => {
        setCount((c) => c + 1 );
    }

    useEffect(() => {
        axios
         .get("https://randomuser.me/api/?page=0&results=20")
         .then((response) => setUsers(response.data.results))
         .catch((error) => console.log(error));
    }, []);

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
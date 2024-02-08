import { useState, useEffect, createContext, useContext } from "react";
import axios from 'axios';
import User from "./User";


function Users() {

    const dataUsers = [{
        name: {first: "John", last: "Bravo"},
        email: "J.Bravo@email.xl",
        login: {uuid: '000001'}
    }];

    const secondUser = [{
        name: { first: "Jane", last: "D."},
        email: "JanyDoeDoe@email.xl",
        login: {uuid: '000002'}
    }]

    const [users, setUsers] = useState(dataUsers);

    useEffect(() => {
        axios
         .get("https://randomuser.me/api/?page=0&results=20")
         .then((response) => setUsers(response.data.results))
         .catch((error) => console.log(error));
    }, []);

    return (
        <>
        <div>
            {users.map((user) => (
                <User 
                    key={user.login.uuid} 
                    name={user.name} 
                    email={user.email} 
                />
            ))}
        </div>
        
        <button 
            type='button' 
            onClick={() => setUsers(secondUser)}>
                "Click me to change the State"
        </button>
        </>
    );
}

export default Users;
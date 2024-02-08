import { useState, useEffect } from "react";
import axios from "axios";

function useFetch () {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
         .get("https://randomuser.me/api/?page=0&results=20")
         .then((response) => setUsers(response.data.results))
         .catch((error) => console.log(error));
    }, []);

    return [users];
};

export default useFetch;
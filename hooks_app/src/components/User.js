

function User(props) {
    const { name, email} = props;
    const { first, last} = name;

    return (
        <>
        <div>
            <p>Name: {first} {last}</p>
            <p>Email: {email}</p>
        </div>
        </>
    );
}

export default User;
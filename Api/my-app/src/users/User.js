export default function User ({user}){

    if(user.name === undefined){
        return <div>Loading...</div>
    }
    const {
        name,
        email,
        address: {
            city,
            street
        }
    } = user;

    return (
        <ul>
            <li>Name: {name}</li>
            <li>Email: {email}</li>
        
        <li>
            <ul>
                <li>Street: {street}</li>
                <li>City: {city}</li>
            </ul>
        </li>
        </ul>

    )
}
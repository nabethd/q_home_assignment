import React, {useState} from "react";
import axios from "axios";
import Summary from "../Summary";
import { useQuery } from "react-query";
import SearchAndInvite from "../SearchAndInvite";
import './Users.css'
import UsersTable from "../UsersTable";
const Users = () =>{
    const [users, setUsers] = useState([])
    const [filterdUser, setFilterdUser] = useState([])
    const [query, setQuery] = useState("")
    const { isLoading, error } = useQuery(["repo"], () =>
             axios
                .get("https://voicetest20202.s3.amazonaws.com/users.json")
                .then((res) => {
                    setUsers(res.data)
                    setFilterdUser(res.data)
                })
        );
    if (isLoading) {
        console.log( "Loading...");
    }

    if (error) console.log( "An error has occurred: " + error.message);
    const handelSearch = (query) =>{
        setQuery(query)
        setFilterdUser(
            users.filter(user => user.firstName.toLowerCase().includes(query.toLowerCase())
                || user.lastName.toLowerCase().includes(query.toLowerCase())
                || user.email.toLowerCase().includes(query.toLowerCase()))

        )
    }
    const handleDelete = email =>{
        setUsers(prevState => prevState?.filter(user => user.email !== email))
        setFilterdUser(prevState => prevState?.filter(user => user.email !== email))
    }

    return <div className='users-container'>
        <Summary users={users} isLoading={isLoading}/>
        <SearchAndInvite query={query} setQuery={setQuery} handelSearch={handelSearch}/>
        <UsersTable users={filterdUser} setUsers={setUsers} handleDelete={handleDelete} isLoading={isLoading}/>
    </div>

}

export default Users
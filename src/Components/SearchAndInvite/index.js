import React from "react";
import TextField from '@mui/material/TextField';
import './SearchAndInvite.css'
const SearchAndInvite = ({query, handelSearch}) =>{

    return <div className="search-and-invite-container">
        <TextField
            id="outlined-basic" label="Search members"
            className='search-input'
            placeholder="Search members"
            onChange={ event=> handelSearch(event.target.value)}
            value={query}/>
        <button className='invite-button' onClick={()=>{} }>+ Invite people</button>
    </div>

}

export default SearchAndInvite

//todo can add the search svg to input
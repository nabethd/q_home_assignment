import React from "react";
import './UsersTable.css'
import Divider from "../Divider";
import UserLine from "../UserLine";
import UserLineSkeleton from "../UserLineSkeleton";
const UsersTable = ({users, handleDelete, isLoading}) =>{


    return <div className="users-table">
        <table>
        <tr className='header-table' >
            <td className='name-header'>Name</td>
            <td  className='email-header'>Email</td>
            <td  className='status-header'>Status</td>
        </tr>
        <Divider/>
            {users.length === 0 ? 'No users found. Try a different search or Invite a Team Member'
                : users?.map(user => {
                    if(isLoading){
                        return <UserLineSkeleton />
                    }
                    return <UserLine user={user} handleDelete={handleDelete}/>})}

        </table>
    </div>

}

export default UsersTable
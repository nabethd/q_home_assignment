import React from "react";
import './UsersTable.css'
import Divider from "../Divider";
import UserLine from "../UserLine";
import UserLineSkeleton from "../UserLineSkeleton";
const UsersTable = ({users, handleDelete, isLoading}) =>{

    let displayUsersRow;
    if(isLoading){
        displayUsersRow = <>
            <UserLineSkeleton/>
            <UserLineSkeleton/>
            <UserLineSkeleton/>
        </>
    }
    else if(users.length === 0){
        displayUsersRow= 'No users found. Try a different search or Invite a Team Member';
    } else{
        displayUsersRow = users?.map(user => {
                return <UserLine user={user} handleDelete={handleDelete}/>
            })
    }

    return <div className="users-table">
        <table>
            <tr className='header-table' >
                <td className='name-header'>Name</td>
                <td  className='email-header'>Email</td>
                <td  className='status-header'>Status</td>
            </tr>
            <Divider/>
        </table>
        <div className='users-table-body'>
        <table>
                {displayUsersRow}
        </table>
        </div>
    </div>

}

export default UsersTable
import React from "react";

import Divider from "../Divider";
import './UserLineSkeleton.css'
const UserLineSkeleton = () =>{

    return <>
        <tr className="user-line">
        <td className='user-avatar-skeleton'>
        </td>
        <td className='user-name-skeleton'>
        </td>
            <td className='user-email-skeleton'>
            </td>
            <td className='user-status-skeleton'>
            </td>
    </tr>
    <Divider/>
        </>


}

export default UserLineSkeleton
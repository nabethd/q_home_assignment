import React from "react";
import {Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

import AvatarLarge from "../../Avatar large.svg";
import Divider from "../Divider";
import './UserLine.css'
const UserLine = ({user, handleDelete}) =>{

    return <>
        <tr className="user-line">
        <td className='user-avatar'>
            {user.img ||  <img src={AvatarLarge} alt="avatar svg" />}
        </td>
        <td className='user-name'>
            {user.firstName + user.lastName}
        </td>
            <td className='user-email'>
               {user.email}
            </td>
            <td className='user-status'>
                {user.status}
            </td>
            <td className='delete-user-button'>
                <Button sx={{ color: 'grey' }} variant="Text" onClick={ () => handleDelete(user.email)} startIcon={<DeleteIcon />}>
                    Delete
                </Button>
            </td>
    </tr>
    <Divider/>
        </>


}

export default UserLine
import React from "react";
import './Summary.css'
const Summary = ({users, isLoading}) =>{

    let approved = 0;
    let pending = 0;

    for (let user of users) {
        if(user.status === 'approved'){
            approved++;
        }
        if(user.status === 'pending'){
            pending++;
        }
    }

    return (
     <div className='summary-container'>
        <div className='users-box'>
            {isLoading? <div className='users-box-skeleton' /> : <h2 > {approved} </h2>}
            <h4> Active</h4>
        </div>
        <div className='users-box'>
            {isLoading?  <div className='users-box-skeleton' /> :  <h2 > {pending} </h2>}
            <h4> pending</h4>
        </div>
    </div>)

}

export default Summary
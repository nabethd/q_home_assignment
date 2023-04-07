import React from "react";
import Divider from "../Divider";
import UserLine from "../UserLine";
import UserLineSkeleton from "../UserLineSkeleton";
import broken from "../../Assets/broken.svg";
import "./UsersTable.css";

const UsersTable = ({users, handleDelete, isLoading, isError, refetch}) => {
    let displayUsersRow;
    if (isError) {
        displayUsersRow = (
            <div className="users-error">
                <img className="broken-svg" src={broken} alt="broken svg" width={35.5} height={30}/>
                <div className="broken-text">Something went wrong.</div>
                <div className="try-again-text" onClick={() => refetch()}>
                    Try again
                </div>
            </div>
        );
    } else if (isLoading) {
        displayUsersRow = (
            <>
                <UserLineSkeleton/>
                <UserLineSkeleton/>
                <UserLineSkeleton/>
            </>
        );
    } else if (users.length === 0) {
        displayUsersRow =
            "No users found. Try a different search or Invite a Team Member";
    } else {
        displayUsersRow = users?.map((user) => {
            return <UserLine user={user} handleDelete={handleDelete}/>;
        });
    }
    return (
        <div className="users-table">
            <table>
                <tr className="header-table">
                    <td className="name-header">Name</td>
                    <td className="email-header">Email</td>
                    <td className="status-header">Status</td>
                </tr>
                <Divider/>
            </table>
            <div className="users-table-body">
                <table>{displayUsersRow}</table>
            </div>
        </div>
    );
}

export default UsersTable;

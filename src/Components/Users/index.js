import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Summary from "../Summary";
import SearchAndInvite from "../SearchAndInvite";
import UsersTable from "../UsersTable";
import "./Users.css";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [filterdUser, setFilterdUser] = useState([]);
  const [query, setQuery] = useState("");
  const { isLoading, refetch, isError } = useQuery(["users"], () =>
    axios
      .get("https://voicetest20202.s3.amazonaws.com/users.json")
      .then((res) => {
        setUsers(res.data);
        setFilterdUser(res.data);
      })
  );
  if (isLoading) {
    console.log("Loading...");
  }

  const handelSearch = (query) => {
    setQuery(query);
    setFilterdUser(
      users.filter(
        (user) =>
          user.firstName.toLowerCase().includes(query.toLowerCase()) ||
          user.lastName.toLowerCase().includes(query.toLowerCase()) ||
          user.email.toLowerCase().includes(query.toLowerCase())
      )
    );
  };
  const handleDelete = (email) => {
    setUsers((prevState) => prevState?.filter((user) => user.email !== email));
    setFilterdUser((prevState) =>
      prevState?.filter((user) => user.email !== email)
    );
  };

  return (
    <div className="users-container">
      <Summary users={users} isLoading={isLoading} isError={isError} />
      <SearchAndInvite
        query={query}
        setQuery={setQuery}
        handelSearch={handelSearch}
      />
      <UsersTable
        users={filterdUser}
        handleDelete={handleDelete}
        isLoading={isLoading}
        isError={isError}
        refetch={refetch}
      />
    </div>
  );
};

export default Users;

import React from "react";
import LeftSidePanel from "../LeftSidePanel";
import Users from "../Users";
import "./People.css";

const People = () => {
  return (
    <div className="people-container">
      <LeftSidePanel />
      <Users />
    </div>
  );
};

export default People;

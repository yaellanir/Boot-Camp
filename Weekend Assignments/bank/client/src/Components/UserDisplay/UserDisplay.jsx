import React from "react";
import "./UserDisplay.css";

function UserDisplay({ user }) {
  return (
    <div className="userDisplay-card">
      <h5>{`Name: ${user.firstName} ${user.lastName} `}</h5>
      <h5>{`Active: ${user.isActive}`}</h5>
      <h5>{`Account Balance: ${user.cash}`}</h5>
      <h5>{`Account Credit: ${user.credit}`}</h5>
      <h5>{`Passport Id: ${user.passport}`}</h5>
    </div>
  );
}

export default UserDisplay;

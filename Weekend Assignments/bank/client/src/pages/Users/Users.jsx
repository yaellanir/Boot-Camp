import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserDisplay from "../../Components/UserDisplay/UserDisplay"
import "./Users.css";

function Users({ data }) {
  const [displayAllUsers, setDisplayAllUsers] = useState(false);
  const [displayUserById, setDisplayUserById] = useState("");

  function displayUsers() {
    setDisplayAllUsers((prev) => !prev)
  }

  function displaySingleUser(event) {
    const inputPassport = console.log(event.target.value);
    setDisplayUserById(inputPassport)
  }

  return (
    <div>
      <Link to="/">
        <h3>back to Homepage</h3>
      </Link>
      <div className="user-functions-container">
        <button onClick={displayUsers}>Find All users</button>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="passport">Find user by passport</label>
          <input  onChange={displaySingleUser} placeholder="Passport Number" name="findOne" id="findOne" />
        </div>
      </div>
      <div className="main-content">
        {displayAllUsers && data?.map((user) => {
          return <UserDisplay user={user} key={user.passport} />
        })}
      </div>
    </div>
  );
}

export default Users;

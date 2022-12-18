import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

function Form() {
  const [selectedValue, setSelectedValue] = useState(null);
  const navigate = useNavigate();

  function handleRoute(event) {
    const route =event.target.value;
    navigate(`/${route}`)
  }
  return (
    <div>
      <form>
        <div className="input-container">
          <h2>Welcome Bank Manager</h2>
          <h3>What would you like to do today?</h3>
          <br />
          <select onChange={handleRoute} type="text">
            <option value="What">Choose an action please</option>
            <option value="users">Find All Users</option>
            <option value="users">Find user</option>
            <option value="users">Delete User</option>
            <option value="users">Filter</option>
            <option value="transactions">Deposit money</option>
            <option value="transactions">Withdraw money</option>
            <option value="transactions">
              Transfer money between accounts
            </option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Form;

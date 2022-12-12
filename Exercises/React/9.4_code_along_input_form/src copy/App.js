import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  // lifting the state from addUser to here- the closest junction that affects all components
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (user) => {
    console.log(user);
    setUsersList((prev)=> [...prev, user])
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {usersList.length > 0 && <UsersList users={usersList} />}
    </div>
  );
}

export default App;

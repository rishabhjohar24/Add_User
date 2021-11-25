import React, { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
function App() {
  const [user, setUser] = useState([
    { name: "Rishabh", age: 21, id: 1 },
    {
      name: "Kartavya",
      age: 21,
      id: 2,
    },
    { name: "Pradhum", age: "22", id: 3 },
  ]);
  const onAddUserHandler = (newUser) => {
    setUser((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({
        name: newUser.name,
        age: newUser.age,
        id: 4 + Math.round(Math.random()),
      });
      console.log(updatedUsers);
      return updatedUsers;
    });
  };
  return (
    <div>
      <AddUser addUser={onAddUserHandler} />
      <UsersList users={user} />
    </div>
  );
}

export default App;

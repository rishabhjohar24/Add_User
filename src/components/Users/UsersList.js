import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";
const UsersList = (props) => {
  const list = props.users.map((user) => (
    <li key={user.id}>
      Name : {user.name} ({user.age}) years old
    </li>
  ));
  return (
    <Card className={classes.users}>
      <ul>{list}</ul>
    </Card>
  );
};

export default UsersList;

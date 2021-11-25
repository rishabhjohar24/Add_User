import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    if (name.trim().length === 0 || age.trim() === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age {non-empty values}",
      });
      return;
    } else if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age {age > 1}",
      });
      return;
    }
    props.addUser({ name: name, age: age });
    setName("");
    setAge("");
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={name}
            onChange={nameChangeHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={ageChangeHandler}
          />
          <Button type="submit"> Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

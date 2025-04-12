import { useContext, useState } from "react";

import { UserContext } from "../userContext";

import React from "react";

const UpdateUserText = () => {
  const { updateUser } = useContext(UserContext);
  const [newName, setNewName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(newName);
    setNewName("");
  };
  return (
    <div>
      <h2>Update UserName</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="enter new name"
        />
        <button type="Submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateUserText;

import React from "react";
import { userContext } from "../App";

const User = () => {
  return (
    <userContext.Consumer>
      {(name) => {
        return <h1>{name}</h1>;
      }}
    </userContext.Consumer>
  );
};

export default User;

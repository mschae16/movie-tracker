import React from "react";

const CreateUser = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <input type="submit" value="Create User" />
      </form>
    </div>
  );
};

export default CreateUser;

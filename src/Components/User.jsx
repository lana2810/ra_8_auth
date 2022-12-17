import React from "react";
import { useAuth } from "../hooks/useAuth";

function User() {
  const { currentUser, logout } = useAuth();
  const { name, avatar } = currentUser;
  const handleClick = () => {
    logout();
  };

  return (
    <div className="user">
      <span>Hello, {name}!</span>
      <img src={avatar} alt="foto-user" className="img-user" />
      <button className="btn btn-logout" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
}

export default User;

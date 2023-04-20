import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

function Login() {
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(userData));
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) =>
            setUserData({ ...userData, [e.target.name]: e.target.value })
          }
          value={userData.name}
          type="text"
          name="name"
          placeholder="Name..."
        />
        <input
          onChange={(e) =>
            setUserData({ ...userData, [e.target.name]: e.target.value })
          }
          value={userData.email}
          type="text"
          name="email"
          placeholder="Email..."
        />
        <button>Login</button>
      </form>
      <button
        onClick={() => {
          dispatch(logout());
        }}
        style={{ width: "100%", backgroundColor: "crimson" }}
      >
        Logout
      </button>
      <hr style={{ width: "100%" }} />
    </div>
  );
}

export default Login;

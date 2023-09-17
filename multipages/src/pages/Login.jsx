import React, { useEffect } from "react";

import axios from "axios";
import { useNavigation, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const onLogin = () => {
    axios
      .post("https://dummyjson.com/auth/login", {
        username: "kminchelle",
        password: "0lelplR",
      })
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        navigate("/");
      })
      .catch(() => {
        alert("Login failed");
      });
  };

  return (
    <div>
      <h1>Login</h1>

      <button onClick={onLogin}>Fake Login</button>
    </div>
  );
}

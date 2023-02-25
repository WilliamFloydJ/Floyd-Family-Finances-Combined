import React, { useState } from "react";
import axios from "axios";

function Login(props) {
  const [accountName, setAccountName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function loginSubmission(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("accountName", accountName);
    formData.append("password", password);

    const res = await axios.post("/api/Login", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (res.status === 204) {
      setError(res.data);
      const error = document.getElementById("error");
      error.classList.remove("displayNone");
    } else if (res.status === 200) {
      document.location.reload();
    }
  }

  return (
    <div id="Login">
      <h1>Login:</h1>
      <form onSubmit={loginSubmission}>
        <div>
          <label htmlFor="name">User:</label>
          <input
            type={"text"}
            name="name"
            id="name"
            placeholder="User Name"
            value={accountName}
            onChange={(e) => {
              setAccountName(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type={"password"}
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <input type={"submit"} value="Login" />
      </form>
      <h1 id="error" className="errorManage displayNone">
        {error}
      </h1>
      <button onClick={props.setCreateAccount}>Create Account</button>
    </div>
  );
}

export default Login;

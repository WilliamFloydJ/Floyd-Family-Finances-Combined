import React, { useEffect, useState } from "react";

function CreateAccount(props) {
  const [accountName, setAccountName] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [error, setError] = useState("");

  function verification(e) {
    const element = e.target;
    if (document.activeElement !== element) {
      if (password === confPassword) {
        setError("");
      } else {
        setError("Passwords Don't Match");
      }
    }
  }
  useEffect(() => {
    if (password === confPassword) {
      setError("");
    }
  }, [confPassword]);

  useEffect(() => {
    const errManager = document.getElementById("error");
    if (error === "") {
      errManager.classList.add("displayNone");
    } else {
      errManager.classList.remove("displayNone");
    }
  }, [error]);

  return (
    <div id="Login">
      <h1>Create Account</h1>
      <form action="/api/CreateAccount" method="post" className="createAccount">
        <div className="fit-content">
          <label>User</label>
          <input
            type={"text"}
            name="accountName"
            id="name"
            placeholder="User Name"
            value={accountName}
            onChange={(e) => {
              setAccountName(e.target.value);
            }}
          />
        </div>
        <div className="fit-content">
          <label>Password</label>
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
        <div className="fit-content">
          <label>Confirm Password</label>
          <input
            type={"password"}
            name="confPassword"
            id="confPassword"
            placeholder="Confirm Password"
            value={confPassword}
            onChange={(e) => {
              setConfPassword(e.target.value);
            }}
            onBlur={verification}
          />
        </div>

        <h3 id="error" className="errorManage displayNone">
          {error}
        </h3>

        <input type="submit" value="Create Account" disabled={error !== ""} />
      </form>
      <button onClick={props.setCreateAccount}>Already have an Account?</button>
    </div>
  );
}

export default CreateAccount;

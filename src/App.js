import Header from "./Components/Header";
import Content from "./Components/Pages/Content";
import React, { useEffect, useState } from "react";
import isLoggedIn from "./Functions/isLoggedIn";
import Login from "./Components/Pages/Login";
import CreateAccount from "./Components/Pages/CreateAccount";
import Finances from "./Components/Pages/Finances";

import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [createAccount, setCreateAccount] = useState(false);
  const [finances, setFinances] = useState(false);
  function toggleAccount() {
    if (createAccount === false) {
      setCreateAccount(true);
    } else {
      setCreateAccount(false);
    }
  }
  function financesTrue() {
    setFinances(true);
  }
  function financesFalse() {
    setFinances(false);
  }
  useEffect(() => {
    async function isLoggedInFunc() {
      const logged = await isLoggedIn();

      setLoggedIn(logged);
    }
    isLoggedInFunc();
  }, []);
  return (
    <div className="App">
      <Header />
      {createAccount ? (
        <CreateAccount setCreateAccount={toggleAccount} />
      ) : loggedIn ? (
        finances ? (
          <Finances
            isLoggedIn={loggedIn}
            setFinancesTrue={financesTrue}
            setFinancesFalse={financesFalse}
          />
        ) : (
          <Content
            isLoggedIn={loggedIn}
            setFinancesTrue={financesTrue}
            setFinancesFalse={financesFalse}
          />
        )
      ) : (
        <Login setCreateAccount={toggleAccount} />
      )}
    </div>
  );
}

export default App;

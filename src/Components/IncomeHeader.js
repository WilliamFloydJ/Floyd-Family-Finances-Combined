import React, { useState, useEffect } from "react";
import axios from "axios";

function IncomeHeader(props) {
  const [income, setIncome] = useState(0);

  useEffect(() => {
    incomeFunc();
  }, []);
  async function incomeFunc() {
    if (props.isLoggedIn) {
      const Income = await axios.get("/api/Income");
      setIncome(Income.data[0].amount);
    }
  }

  return <h1 className="moneyOnHand h1Decoration">Total Money is :{income}</h1>;
}

export default IncomeHeader;

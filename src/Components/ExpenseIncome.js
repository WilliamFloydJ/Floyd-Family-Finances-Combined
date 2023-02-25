import React, { useState, useEffect } from "react";
import axios from "axios";

function ExpenseIncome(props) {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    expenseFunc();
    incomeFunc();
  }, []);

  async function expenseFunc() {
    if (props.isLoggedIn) {
      const expenseArr = await axios.get(`/api/Expenses`);
      setExpenses(expenseArr.data);
    }
  }

  async function incomeFunc() {
    if (props.isLoggedIn) {
      const Income = await axios.get("/api/Income");
      setIncome(Income.data[0].amount);
    }
  }

  const intIncome = parseFloat(income.replace("$", "").replace(",", ""));
  let expAmount = 0;

  for (let exp of expenses) {
    const expAmountInt = parseFloat(exp.amount.replace("$", ""));
    if (expAmountInt >= 0) {
      expAmount += expAmountInt;
    } else {
      expAmount -= expAmountInt;
    }
  }

  return (
    <h1 className="moneyOnHand h1Decoration">
      Money with Expenses : ${(intIncome - expAmount).toFixed(2)}
    </h1>
  );
}

export default ExpenseIncome;

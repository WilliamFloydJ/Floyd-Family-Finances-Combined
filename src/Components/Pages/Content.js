import React, { useEffect, useState } from "react";
import axios from "axios";
import ContentHeader from "../ContentHeader";
import borderRadius from "../../Functions/borderRadius";
import IncomeHeader from "../IncomeHeader";
import ExpenseIncome from "../ExpenseIncome";

function Content(props) {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    async function expenseFunc() {
      if (props.isLoggedIn) {
        const expenseArr = await axios.get(`/api/Expenses`);
        setExpenses(expenseArr.data);
      }
    }
    expenseFunc();
  }, []);
  useEffect(() => {
    borderRadius();
  }, [expenses]);
  return (
    <div className="contentContainer">
      <ContentHeader
        setFinancesTrue={props.setFinancesTrue}
        setFinancesFalse={props.setFinancesFalse}
      />
      <h1 className="h1Decoration">Create Entry</h1>
      <IncomeHeader isLoggedIn={props.isLoggedIn} />
      <ExpenseIncome isLoggedIn={props.isLoggedIn} />
      <div className="flex">
        {expenses.map((i, ind) => {
          function submitExpense(e) {
            const amount = document.getElementById(ind + "id").value;
            const date = new Date();
            axios.put(
              `/api/Expense/${i.expenseid}/${amount}/${date.getFullYear()}-${
                date.getMonth() + 1
              }-${date.getDate()}`
            );
          }
          return (
            <form
              key={ind}
              className="expense"
              onSubmit={(e) => submitExpense(e)}
            >
              <label htmlFor={ind + "name"}>{i.name + " " + i.type}</label>
              <div className="flex">
                <h2 className="money">$</h2>
                <input
                  type={"number"}
                  min="0.00"
                  step={"0.01"}
                  name={ind + "name"}
                  id={ind + "id"}
                />
              </div>

              <h2
                className={
                  parseFloat(i.amount.slice(1)) >= 0 ? "positive" : "negative"
                }
              >
                {"Financial Plan Left " + i.amount}
              </h2>
              <input type={"submit"} />
            </form>
          );
        })}
      </div>
    </div>
  );
}

export default Content;

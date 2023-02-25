import React, { useState, useEffect } from "react";
import axios from "axios";
import ContentHeader from "../ContentHeader";
import borderRadius from "../../Functions/borderRadius";
import IncomeHeader from "../IncomeHeader";
import ExpenseIncome from "../ExpenseIncome";
import DownArrow from "../DownArrow";
import UpArrow from "../UpArrow";
import expenseFunc from "../../Functions/expenseFunc";
function Finances(props) {
  const [expenses, setExpenses] = useState([]);
  const [edit, setEdit] = useState([]);

  useEffect(() => {
    expenseFunc(props.isLoggedIn, setExpenses);
  }, []);
  useEffect(() => {
    borderRadius();
    const editArr = [];
    expenses.forEach((val, ind) => {
      editArr.push(false);
    });
    setEdit(editArr);
  }, [expenses]);

  function onEdit(id) {
    const editArr = [...edit];
    editArr[id] = true;
    setEdit(editArr);
  }

  async function onSubmitExpenses() {
    const nameSelector = document.getElementById("type");
    const timeSelector = document.getElementById("time");

    let formData = new FormData();

    formData.append("name", document.getElementById("name").value);
    formData.append(
      "type",
      nameSelector.options[nameSelector.selectedIndex].value
    );
    formData.append("amount", document.getElementById("amount").value);
    formData.append(
      "time",
      timeSelector.options[timeSelector.selectedIndex].value
    );
    formData.append("date", document.getElementById("date").value);

    const expense = await axios.post("/api/CreateExpense", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  async function onSubmitIncome() {
    let formData = new FormData();
    formData.append("amount", document.getElementById("amount2").value);

    const expense = await axios.post("/api/CreateIncome", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  async function onSubmitUpdate(ind) {
    const updated = document.getElementById(ind + "input").value;
    const update = await axios.put(`/api/UpdateExpense/${updated}/${ind}`);
  }

  return (
    <div>
      <ContentHeader
        setFinancesTrue={props.setFinancesTrue}
        setFinancesFalse={props.setFinancesFalse}
      />
      <div className="flex">
        <div className="flex column">
          <h1 className="CreationH1">Expense Creation</h1>
          <form className="expense" onSubmit={() => onSubmitExpenses()}>
            <input type={"text"} name="name" placeholder="Name" id="name" />
            <select name="type" id="type">
              <option value="Fuel">Fuel</option>
              <option value="Food/Drinks">Food/Drinks</option>
              <option value="Holiday">Holiday</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Savings">Savings</option>
              <option value="Toiletries">Toiletries</option>
              <option value="Transportation">Transportation</option>
              <option value="Vacation">Vacation</option>
              <option value="Insurance">Insurance</option>
              <option value="HealthCare">HealthCare</option>
              <option value="Clothing">Clothing</option>
              <option value="Supplies">Supplies</option>
              <option value="Tools">Tools</option>
              <option value="Arts & Crafts">Arts & Crafts</option>
              <option value="Furniture">Furniture</option>
              <option value="Appliances">Appliances</option>
              <option value="Rent/Mortgage">Rent/Mortgage</option>
              <option value="Loan">Loan</option>
              <option value="Other Expenses">Other Expenses</option>
            </select>
            <input
              name="amount"
              type={"number"}
              min="0.00"
              step={"0.01"}
              placeholder="Amount"
              id="amount"
            />
            <label htmlFor="date">Start Date</label>
            <input type={"date"} id="date" name="date" />
            <select name="time" id="time">
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Bi-Weekly">Bi-Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>

            <input type={"submit"} />
          </form>
        </div>
        <div className="flex column">
          <h1 className="CreationH1">Income Creation</h1>
          <form className="expense" onSubmit={() => onSubmitIncome()}>
            <label htmlFor="amount2">Amount of Income</label>
            <input
              name="amount2"
              type={"number"}
              min="0.00"
              step={"0.01"}
              placeholder="Amount"
              id="amount2"
            />

            <input type={"submit"} />
          </form>
        </div>
      </div>

      <IncomeHeader isLoggedIn={props.isLoggedIn} />
      <ExpenseIncome isLoggedIn={props.isLoggedIn} />

      <ul className={expenses.length !== 0 ? "expenseList" : "blank"}>
        {expenses.map((val, ind) => {
          return (
            <li key={ind} id={ind} className={"flex"}>
              <div>
                {edit[ind] === false ? (
                  <div className="flex">
                    <h1
                      id={ind + "h1"}
                      onClick={() => {
                        onEdit(ind);
                      }}
                    >
                      {val.name}
                    </h1>
                    <h3>{val.type}</h3>
                  </div>
                ) : (
                  <form
                    className="inputForm"
                    onSubmit={() => onSubmitUpdate(ind)}
                  >
                    <input type={"text"} id={ind + "input"} />
                    <input type={"submit"} value="Submit" id={ind + "button"} />
                    <input type={"reset"} id={ind + "reset"} />
                  </form>
                )}
                <div>
                  <UpArrow
                    expenseid={val.expenseid}
                    isLoggedIn={props.isLoggedIn}
                    setExpenses={setExpenses}
                  />
                  <DownArrow
                    expenseid={val.expenseid}
                    isLoggedIn={props.isLoggedIn}
                    setExpenses={setExpenses}
                  />
                </div>
              </div>
              <div>
                <h1>{val.amount}</h1>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Finances;

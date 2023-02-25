import axios from "axios";

async function expenseFunc(isLoggedIn, setExpenses) {
  if (isLoggedIn) {
    const expenseArr = await axios.get("/api/Expenses");
    setExpenses(expenseArr.data);
  }
}

export default expenseFunc;

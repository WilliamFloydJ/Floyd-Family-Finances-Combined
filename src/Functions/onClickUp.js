import axios from "axios";
import expenseFunc from "./expenseFunc";

async function onClickUp(boolean, expenseid, isLoggedIn, setExpenses) {
  const pressed = await axios.put(`/api/Priority/${expenseid}/${boolean}`);
  if (pressed.data === "Done") {
    expenseFunc(isLoggedIn, setExpenses);
  }
}
export default onClickUp;

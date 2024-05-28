import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./components/Budget";
import RemainingBudget from "./components/RemainingBudget";
import ExpenseTotal from "./components/ExpenseTotal";
import AddExpenseForm from "./components/AddExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { useState } from "react";

function App() {
  const [expense, setExpense] = useState([]);
  const [budget, setBudget] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  function handleExpance(data) {
    setExpense([...expense, data]);
  }

  function handleDelete(id, cost) {
    setExpense((prevItems) =>
      prevItems.filter((prevItem) => prevItem.id !== id)
    );
    setTotalCost((prevCost) => prevCost - cost);
  }

  function handleBudget(e) {
    setBudget(e);
  }

  function handleTotalCost(cost) {
    setTotalCost((prev) => prev + cost);
  }

  return (
    <div className="container">
      <h1 className="mt-3 text-center">My Budget Planner</h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget onBudget={handleBudget} budget={budget} />
        </div>
        <div className="col-sm">
          <RemainingBudget budget={budget} totalCost={totalCost} />
        </div>
        <div className="col-sm">
          <ExpenseTotal totalCost={totalCost} />
        </div>
      </div>

      <h3 className="mt-3 text-center">Expenses</h3>
      <div className="row ">
        <div className="col-sm">
          <ExpenseList expense={expense} onDelete={handleDelete} />
        </div>
      </div>

      <h3 className="mt-3 text-center">Add Expense</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <AddExpenseForm
            onExpenseItem={handleExpance}
            onToTalCost={handleTotalCost}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

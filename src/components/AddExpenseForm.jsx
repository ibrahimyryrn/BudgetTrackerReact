import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddExpenseForm({ onExpenseItem, onToTalCost }) {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  function handleSubmit(e) {
    onToTalCost(cost);
    e.preventDefault();
    const expense = {
      id: uuidv4(),
      name,
      cost,
    };
    onExpenseItem(expense);
    setCost("");
    setName("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-sm col-lg-4">
            <label>Name</label>
            <input
              required="required"
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-sm col-lg-4">
            <label>Cost</label>
            <input
              required="required"
              type="number"
              className="form-control"
              id="cost"
              value={cost}
              onChange={(e) => setCost(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="row mt-3 ">
          <div className="col-sm d-flex justify-content-md-around align-items-center">
            <button type="submit" className="btn btn-primary ">
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddExpenseForm;

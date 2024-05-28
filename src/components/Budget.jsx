import { useState } from "react";

function Budget({ onBudget, budget }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between alert-warning">
      <span>Budget: {!isOpen && budget} ₺</span>
      {isOpen && (
        <input
          type="number"
          placeholder="enter the number"
          value={budget}
          onChange={(e) => onBudget(Number(e.target.value))}
        />
      )}
      <button className="btn btn-primary btn-sm" onClick={handleClick}>
        edit
      </button>
    </div>
  );
}

export default Budget;

function RemainingBudget({ budget, totalCost }) {
  return (
    <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between alert-danger">
      RemainingBudget: <span>{budget - totalCost} ₺</span>
    </div>
  );
}

export default RemainingBudget;

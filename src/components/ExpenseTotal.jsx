function ExpenseTotal({ totalCost }) {
  return (
    <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between alert-info">
      ExpenseTotal: <span>{totalCost} ₺</span>
    </div>
  );
}

export default ExpenseTotal;

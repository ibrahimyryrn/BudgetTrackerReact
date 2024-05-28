function ExpenseItem({ item, onDelete }) {
  const { id, name, cost } = item;

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>{name}</span>
      <div>
        <span>{cost} ₺</span>{" "}
        <button
          className="btn btn-primary btn-sm btn-danger"
          onClick={() => onDelete(id, cost)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default ExpenseItem;

import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expense, onDelete }) {
  return (
    <ul className="list-group mt-3 mb-3">
      {expense?.map((item) => (
        <ExpenseItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default ExpenseList;

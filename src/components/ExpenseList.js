import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList() {
  const { expenses } = useContext(AppContext);

  return (
    <table className="table table-striped table-bordered">
      <thead className="table-secondary">
        <tr>
          <th scope="col">Department</th>
          <th scope="col">Allocated Budget</th>
          <th scope="col">Increase By 10</th>
          <th scope="col">Decrease By 10</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </tbody>
    </table>
  );
}

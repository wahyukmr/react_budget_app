import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function ExpenseTotal() {
  const { total, currency } = useContext(AppContext);

  return (
    <div className="alert alert-primary input-group">
      <span className="input-group-text">
        Spent to far: {currency}
        {total}
      </span>
    </div>
  );
}

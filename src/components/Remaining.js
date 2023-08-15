import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Remaining() {
  const { remaining, currency } = useContext(AppContext);

  return (
    <div className="alert alert-success input-group">
      <span className="input-group-text">
        Remaining: {currency}
        {remaining}
      </span>
    </div>
  );
}

import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function AllocationForm() {
  const { currency, dispatch, remaining } = useContext(AppContext);
  const [newCost, setNewCost] = useState("");
  const [item, setItem] = useState("Marketing");
  const [action, setAction] = useState("Add");

  const submitEvent = function () {
    const expense = {
      name: item,
      cost: +newCost,
    };

    if (+newCost > remaining) {
      alert("The value cannot exceed remaining funds  £" + remaining);
      setNewCost("");
      return;
    }
    if (action === "Reduce") {
      dispatch({ type: "RED_EXPENSE", payload: expense });
    } else {
      dispatch({ type: "ADD_EXPENSE", payload: expense });
    }
  };

  return (
    <div className="row">
      <div className="input-group col ms-3">
        <label className="input-group-text" htmlFor="dapartmentSelectId">
          Dapartment:
        </label>
        <select
          className="form-select"
          id="dapartmentSelectId"
          onChange={(e) => setItem(e.target.value)}
        >
          <option disabled>Choose...</option>
          <option value="Marketing">Marketing</option>
          <option value="Finance">Finance</option>
          <option value="Sales">Sales</option>
          <option value="Human Resource">HR</option>
          <option value="IT">IT</option>
        </select>
      </div>

      <div className="input-group col">
        <label className="input-group-text" htmlFor="allocationSelectId">
          Allocation:
        </label>
        <select
          className="form-select"
          id="allocationSelectId"
          onChange={(e) => setAction(e.target.value)}
        >
          <option defaultValue disabled>
            Choose...
          </option>
          <option value="Add">Add</option>
          <option value="Reduce">Reduce</option>
        </select>
      </div>

      <div className="input-group col">
        <label htmlFor="currency" className="input-group-text">
          {currency}
        </label>
        <input
          type="number"
          id="currency"
          className="form-control"
          value={newCost}
          onChange={(event) => setNewCost(event.target.value)}
        />
        <button className="btn btn-primary ms-3" onClick={submitEvent}>
          Save
        </button>
      </div>
    </div>
  );
}

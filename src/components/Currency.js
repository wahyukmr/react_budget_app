import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Currency() {
  const { dispatch } = useContext(AppContext);

  const setCurn = function (curn) {
    console.log(curn);
    dispatch({
      type: "CHG_CURRENCY",
      payload: curn,
    });
  };

  return (
    <div className="alert alert-warning input-group">
      <label className="input-group-text" htmlFor="currencySelectId">
        Currency:
      </label>
      <select
        className="form-select"
        id="currencySelectId"
        defaultValue="£"
        onChange={(e) => setCurn(e.target.value)}
      >
        <option disabled>Choose...</option>
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
      </select>
    </div>
  );
}

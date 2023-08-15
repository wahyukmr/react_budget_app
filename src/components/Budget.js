// import { useContext } from "react";
// import { AppContext } from "../context/AppContext";

// export default function Budget() {
//   const { currency, dispatch, budget } = useContext(AppContext);
//   console.log(budget);

//   const setBudget = function (value) {
//     const currentBudget = +value;
//     const MAX_BUDGET = 20000;
//     const inputMaxBudget = Math.min(currentBudget, MAX_BUDGET);
//     if (currentBudget > MAX_BUDGET) {
//       alert(`The budget limit is only ${MAX_BUDGET}.`);
//     }

//     dispatch({
//       type: "SET_BUDGET",
//       payload: inputMaxBudget,
//     });
//   };

//   return (
//     <div className="alert alert-secondary input-group">
//       <label htmlFor="currency" className="input-group-text">
//         Budget: {currency}
//       </label>
//       <input
//         type="number"
//         id="currency"
//         step="10"
//         max="20000"
//         min="0"
//         value={budget}
//         className="form-control"
//         onChange={(event) => setBudget(event.target.value)}
//       />
//     </div>
//   );
// }
import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function Budget() {
  const { currency, dispatch, budget, total } = useContext(AppContext);
  const [inputValue, setInputValue] = useState(budget);

  const setBudget = function (value) {
    const currentBudget = +value;
    const MAX_BUDGET = 20000;

    if (currentBudget > MAX_BUDGET) {
      alert(`The budget limit is only ${MAX_BUDGET}.`);
      setInputValue(budget);
    } else if (currentBudget < total) {
      alert("You cannot reduce the budget value lower than the spending");
      setInputValue(budget);
    } else {
      dispatch({
        type: "SET_BUDGET",
        payload: currentBudget,
      });
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setBudget(event.target.value);
  };

  return (
    <div className="alert alert-secondary input-group">
      <label htmlFor="currency" className="input-group-text">
        Budget: {currency}
      </label>
      <input
        type="number"
        id="currency"
        step="10"
        max="20000"
        min="0"
        value={inputValue}
        className="form-control"
        onChange={handleInputChange}
      />
    </div>
  );
}

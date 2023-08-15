import { useContext } from "react";
import {
  AiFillCloseCircle,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import { AppContext } from "../context/AppContext";

export default function ExpenseItem({ id, name, cost }) {
  const { currency, dispatch } = useContext(AppContext);

  const handleIncreaseItem = function (item) {
    const expense = {
      name: item,
      cost: 10,
    };
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  const handleDecreaseItem = function (item) {
    const expense = {
      name: item,
      cost: 10,
    };
    dispatch({
      type: "RED_EXPENSE",
      payload: expense,
    });
  };

  const handleDeleteItem = function () {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: id,
    });
  };

  return (
    <tr>
      <td>{name}</td>
      <td>
        {currency}
        {cost}
      </td>
      <td>
        <AiFillPlusCircle
          size="1.5em"
          color="green"
          onClick={() => handleIncreaseItem(name)}
        />
      </td>
      <td>
        <AiFillMinusCircle
          size="1.5em"
          color="brown"
          onClick={() => handleDecreaseItem(name)}
        />
      </td>
      <td>
        <AiFillCloseCircle
          size="1.5em"
          color="red"
          onClick={handleDeleteItem}
        />
      </td>
    </tr>
  );
}

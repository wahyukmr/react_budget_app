import "bootstrap/dist/css/bootstrap.min.css";

import AllocationForm from "./components/AllocationForm";
import Budget from "./components/Budget";
import Currency from "./components/Currency";
import ExpenseList from "./components/ExpenseList";
import ExpenseTotal from "./components/ExpenseTotal";
import Remaining from "./components/Remaining";
import { AppProvider } from "./context/AppContext";

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Company's Budget Allocation</h1>
        <section className="row mt-3">
          <div className="col-md">
            <Budget />
          </div>
          <div className="col-md">
            <Remaining />
          </div>
          <div className="col-md">
            <ExpenseTotal />
          </div>
          <div className="col-md">
            <Currency />
          </div>
        </section>

        <section className="row mt-3">
          <h3>Allocation</h3>
          <ExpenseList />
        </section>

        <section className="row mt-3">
          <h3>Change allocation</h3>
          <AllocationForm />
        </section>
      </div>
    </AppProvider>
  );
};
export default App;

import ExpenseForm from "./ExpenseForm";
import ExpenseSearch from "./ExpenseSearch";
import BudgetTop from "./BudgetTop";
import ExpenseList from "./ExpenseList";

const BadgetPlanner = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-3">My Badget Planner</h2>
      <BudgetTop />
      <ExpenseSearch />
      <ExpenseList />
      <ExpenseForm />
    </div>
  );
};

export default BadgetPlanner;

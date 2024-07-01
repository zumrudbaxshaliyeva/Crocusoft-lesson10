import React, { useState } from "react";
import { BadgetPlannerContext } from "../../../shared/context/BadgetPlanner";

interface IExpense {
  name: string;
  id: number;
  price: number;
}

const ExpenseForm = () => {
  const { addExpenses } = React.useContext(BadgetPlannerContext);

  const [expenseItem, setExpenseItem] = useState<IExpense>({} as IExpense);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;
    setExpenseItem({ ...expenseItem, [name]: value });
  }
  return (
    <>
      <h3 className="text-lg font-bold mt-6 mb-3">Add Expense</h3>
      <div className="flex items-end">
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">Name</span>
          <input
            type="text"
            value={expenseItem.name}
            name="name"
            onChange={handleInputChange}
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          />
        </label>
        <label className="block mx-4">
          <span className="block text-sm font-medium text-slate-700">Cost</span>
          <input
            type="number"
            defaultValue="0"
            value={expenseItem.price}
            name="price"
            onChange={handleInputChange}
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
          />
        </label>
        <button
          className="px-4 py-2 rounded-md border border-blue-500 bg-blue-300"
          onClick={() => {
            addExpenses({
              name: expenseItem.name,
              price: Number(expenseItem.price),
              id: Date.now(),
            });
            setExpenseItem({ name: "", price: 0, id: 0 });
          }}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default ExpenseForm;

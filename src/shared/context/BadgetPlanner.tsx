import React, { useEffect, useState } from "react";

interface IBadget {
  children: React.ReactNode;
}

interface IExpenses {
  name: string;
  price: number;
  id: number;
}

interface IContext {
  filteredExpenses: IExpenses[];
  budget: number;
  addExpenses: (expenses: IExpenses) => void;
  deleteExpenses: (id: number) => void;
  handleSearch: (value: string) => void;
  editBudget: (value: number) => void;
  totalRemaining: number;
  spent: number;
}

export const BadgetPlannerContext = React.createContext<IContext>(
  {} as IContext
);

const BadgetProvider = ({ children }: IBadget) => {
  const [expenses, setExpenses] = useState<IExpenses[]>([]);
  const [budget, setBudget] = useState<number>(1000);
  const [totalRemaining, setTotalRemaining] = useState<number>(budget);
  const [spent, setSpent] = useState<number>(0);
  const [filteredExpenses, setFilteredExpense] =
    useState<IExpenses[]>(expenses);

  function editBudget(budget: number) {
    if (budget > 0) return setBudget(budget);
  }

  function addExpenses(expense: IExpenses) {
    const { id, name, price } = expense;
    if (id && name.trim() && price > 0)
      return setExpenses((prev) => [...prev, expense]);
  }

  function deleteExpenses(id: number) {
    setExpenses(() => expenses.filter((item) => item.id !== id));
  }

  function handleSearch(searchValue: string) {
    const searchFilter = expenses.filter((item) =>
      item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
    setFilteredExpense(searchFilter);
  }

  useEffect(() => {
    setSpent(() =>
      expenses.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0)
    );
    setFilteredExpense(expenses);
  }, [expenses]);

  useEffect(() => {
    setTotalRemaining(() => budget - spent);
  }, [spent]);

  return (
    <>
      <BadgetPlannerContext.Provider
        value={{
          filteredExpenses,
          budget,
          addExpenses,
          deleteExpenses,
          editBudget,
          totalRemaining,
          spent,
          handleSearch,
        }}
      >
        {children}
      </BadgetPlannerContext.Provider>
    </>
  );
};

export default BadgetProvider;

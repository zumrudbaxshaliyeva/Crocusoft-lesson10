import React from "react";
import { BadgetPlannerContext } from "../../../shared/context/BadgetPlanner";

const ExpenseSearch = () => {
  const { handleSearch } = React.useContext(BadgetPlannerContext);
  return (
    <label className="relative block">
      <input
        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="Type to search..."
        type="text"
        name="search"
        onChange={(event) => handleSearch(event.target.value)}
      />
    </label>
  );
};

export default ExpenseSearch;

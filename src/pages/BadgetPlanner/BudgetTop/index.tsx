import React, { useState } from "react";
import { BadgetPlannerContext } from "../../../shared/context/BadgetPlanner";

const BudgetTop = () => {
  const { budget, totalRemaining, spent, editBudget } =
    React.useContext(BadgetPlannerContext);

  const [editInput, setEditInput] = useState<number>(budget);

  const wrapper = React.useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="flex mb-5">
        <div className="rounded border-gray-500 bg-slate-300 flex items-center p-5">
          Badget: ${budget}
          <button
            className="ml-3 rounded bg-blue-500 text-white px-3 py-2"
            onClick={() => {
              wrapper.current?.classList.remove("hidden");
              wrapper.current?.classList.add("block");
            }}
          >
            Edit
          </button>
        </div>
        <div className="mx-6 rounded border-green-500 bg-green-300 text-green-800 flex items-center p-5">
          Remainig: ${totalRemaining}
        </div>
        <div className="rounded border-blue-500 bg-blue-300 text-blue-800 flex items-center p-5">
          Spent so far: ${spent}
        </div>
      </div>
      <div className="editBudgetWrapper hidden my-3" ref={wrapper}>
        <input
          type="number"
          name="edit"
          className="w-25 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1"
          value={editInput}
          onChange={(e) => setEditInput(Number(e.target.value))}
        />
        <button
          className="ml-3 py-2 px-3 rounded-md border-blue-500 bg-blue-300"
          onClick={() => editBudget(editInput)}
        >
          Edit
        </button>
        <span
          onClick={() => {
            wrapper.current?.classList.add("hidden");
            wrapper.current?.classList.remove("block");
          }}
          className="ml-3 inline-flex cursor-pointer items-center justify-center font-semibold border-2 w-10 h-10 bg-red-400 border-red-500 rounded-full"
        >
          X
        </span>
      </div>
    </>
  );
};

export default BudgetTop;

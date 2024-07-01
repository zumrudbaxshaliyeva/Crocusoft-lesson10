import React from "react";
import { BadgetPlannerContext } from "../../../shared/context/BadgetPlanner";

const ExpenseList = () => {
  const { filteredExpenses, deleteExpenses } =
    React.useContext(BadgetPlannerContext);

  return (
    <div className="expenses-wrapper mt-3">
      {filteredExpenses?.length &&
        filteredExpenses?.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center first:border-t border-b py-2"
          >
            <span>{item.name}</span>
            <div className="flex items-center">
              <span className="border-blue-500 rounded-full bg-blue-500 text-white px-3">
                ${item.price}
              </span>
              <span
                className="ml-3 inline-block cursor-pointer"
                onClick={() => deleteExpenses(item.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="#ee3939"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                  >
                    <g transform="scale(10.66667,10.66667)">
                      <path d="M10,2l-1,1h-6v2h18v-2h-6l-1,-1zM4.36523,7l1.52734,13.26367c0.132,0.99 0.98442,1.73633 1.98242,1.73633h8.24805c0.998,0 1.85138,-0.74514 1.98438,-1.74414l1.52734,-13.25586z"></path>
                    </g>
                  </g>
                </svg>
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ExpenseList;

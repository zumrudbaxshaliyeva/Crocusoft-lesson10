import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBudget, IExpense } from "./types";

let initialState: IBudget = {
    expenses: [],
    budget: 0
}
export const BudgetSlice = createSlice({
    name: 'Budget',
    initialState,
    reducers: {
        editBudget: (state: IBudget, action: PayloadAction<number>) => {
            state.budget=action.payload;
        },
        addExpense: (state: IBudget, action: PayloadAction<IExpense>) => {
            state.expenses.push(action.payload)
        },
        removeExpense: (state: IBudget, action: PayloadAction<number>) => {
           state.expenses = state.expenses.filter(expense=>expense.id!==action.payload)
        }
        
        
    }
})

export const { editBudget, addExpense, removeExpense } = BudgetSlice.actions
export default BudgetSlice.reducer
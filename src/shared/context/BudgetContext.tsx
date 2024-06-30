import React from "react"

interface IExpense {
    id: number
    name: string
    cost: number
}

interface IBudget {
    children: React.ReactNode
}

interface IBudgetContextType {
    budget: number
    expenses: IExpense[]
    addExpense: (name: string, cost: number) => void
    removeExpense: (id: number) => void
    remainingBudget: number
    totalSpent: number
    setBudget: (newBudget: number) => void
}

export const BudgetContext = React.createContext<IBudgetContextType>({} as IBudgetContextType)


const BudgetProvider: React.FC<IBudget> = ({ children }) => {
    const [budget, setBudget] = React.useState<number>(0)
    const [expenses, setExpenses] = React.useState<IExpense[]>([])


    const addExpense = (name: string, cost: number) => {
        const newExpense = {
            id: Date.now(), name, cost
        }
        setExpenses([...expenses, newExpense])
    }

    const removeExpense = (id: number) => {
        setExpenses(expenses.filter(expense => expense.id !== id))
    }

    const totalSpent = expenses.reduce((acc, cur) => acc + cur.cost, 0)
    const remainingBudget = budget - totalSpent


    return (
        <BudgetContext.Provider value={{ budget, setBudget, expenses, addExpense, removeExpense, totalSpent, remainingBudget }}>
            {children}
        </BudgetContext.Provider>
    )
}

export default BudgetProvider
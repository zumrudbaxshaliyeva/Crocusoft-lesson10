import { BudgetContext } from '@/shared/context/BudgetContext'
import React from 'react'

const ExpenseList: React.FC = () => {
  const { expenses, removeExpense } = React.useContext(BudgetContext)
  return (
    <div>
      <ul>
        {
          expenses.map((item) => {
            return (
              <li key={item.id}>
                {item.name} €{item.cost}
                <button onClick={() => removeExpense(item.id)}>Delete</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default ExpenseList
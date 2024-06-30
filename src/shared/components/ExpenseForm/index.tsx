import { BudgetContext } from '@/shared/context/BudgetContext'
import React from 'react'
import './ExpenseForm.scss'

const ExpenseForm: React.FC = () => {
  const { addExpense } = React.useContext(BudgetContext)

  const [name, setName] = React.useState<string>('')
  const [cost, setCost] = React.useState<number>(0)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    addExpense(name, cost)
    setName('')
    setCost(0)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='expenseForm'>
        <div className='expenseForm__inputs'>
          <input className='expenseForm__inputs__inp' type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
          <input className='expenseForm__inputs__inp' type="number" placeholder='Cost' onChange={(e) => setCost(Number(e.target.value))} />
        </div>
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default ExpenseForm

import { BudgetContext } from '@/shared/context/BudgetContext'
import React from 'react'

const Remaining: React.FC = () => {
  const {remainingBudget} = React.useContext(BudgetContext)
  return (
    <div>
      <h2>Remaining: {remainingBudget}</h2>
    </div>
  )
}

export default Remaining

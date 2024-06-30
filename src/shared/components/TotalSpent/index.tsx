import { BudgetContext } from '@/shared/context/BudgetContext'
import React from 'react'

const TotalSpent: React.FC = () => {

  const { totalSpent } = React.useContext(BudgetContext)

  return (
    <div>
      <h2>Spent so far: €{totalSpent} </h2>
    </div>
  )
}

export default TotalSpent

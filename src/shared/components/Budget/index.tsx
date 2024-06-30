import React from 'react'
import { BudgetContext } from '@/shared/context/BudgetContext'
import './Budget.scss'

const Budget: React.FC = () => {

    const { budget, setBudget } = React.useContext(BudgetContext)
    const [newBudget, setNewBudget] = React.useState<number>(budget)


    function handleSubmit(e: React.FormEvent){
        e.preventDefault()
        setBudget(newBudget)
    } 

    return (
        <div>
            <h2>Budget: {budget}</h2>
            <form onSubmit={handleSubmit} className='budgetForm'>
                <input className='budgetForm__input' type="number" placeholder='New Budget' onChange={(e)=> setNewBudget(Number(e.target.value))} />
                <button type='submit'>New Budget</button>
            </form>
        </div>
    )
}

export default Budget

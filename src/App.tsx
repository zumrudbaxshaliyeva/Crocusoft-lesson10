import './App.css'
import Budget from '@/shared/components/Budget'
import ExpenseForm from '@/shared/components/ExpenseForm'
import ExpenseList from '@/shared/components/ExpenseList'
import Remaining from '@/shared/components/Remaining'
import TotalSpent from '@/shared/components/TotalSpent'


function App() {


  return (
    <div className='container'>
      <h1>My Budget Planner</h1>
      <Budget />
      <Remaining />
      <ExpenseForm />
      <ExpenseList />
      <TotalSpent />
    </div>
  )
}

export default App

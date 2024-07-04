
import 'bootstrap/dist/css/bootstrap.css';
import Budget from'@/shared/components/Budget'
import Remaining from '@/shared/components/Remaining'
import Spent from '@/shared/components/Spent'
import ExpenseList from '@/shared/components/ExpenseList'
import AddExpenseForm from '@/shared/components/AddExpenseForm'

function App() {


  return (
   
    <div className='container'>
   
        <h1 className='mt-3'>My Budget Planner</h1>
        <div className='row mt-3'>
          <div className='col-sm'>
            <Budget/>
          </div>
          <div className='col-sm'>
            <Remaining/>
          </div>
          <div className='col-sm'>
            <Spent/>
          </div>
        </div>

        <h3 className='mt-3'>Expenses</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
          <ExpenseList/>
          </div>
        </div>

        <h3 className='mt-3'>Add expense</h3>
        <AddExpenseForm/>
      
    </div>
  
  )
}

export default App

import 'bootstrap/dist/css/bootstrap.css';
import { useAppSelector, useAppDispatch } from '@/redux/store';
import { removeExpense } from '@/redux/feature/Budget/BudgetSlice';


const Index=()=>{

 const expenses = useAppSelector(state=>state.Budget.expenses)
 const dispatch= useAppDispatch()


    return(
      <ul className='list-group'>
        {
            expenses.map((expense)=>(
              <li key={expense.id} className='list-group-item d-flex align-items-center justify-content-between'>
             {expense.name}
             <div >
                <span style={{borderRadius:'20px', fontWeight:'600'}} className=' bg-primary text-light px-2 mx-2'> ${expense.cost}</span>
               <button onClick={()=>{dispatch(removeExpense(expense.id))}} className='btn btn-danger'>Delete</button>
             </div>
        </li>
            ))
        }
      </ul>
    )
}

export default Index
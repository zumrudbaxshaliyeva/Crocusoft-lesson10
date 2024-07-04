import { useAppDispatch } from '@/redux/store';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import { addExpense } from '@/redux/feature/Budget/BudgetSlice';



const Index=()=>{
   const dispatch=useAppDispatch()
 
  
    const [name, setName]=React.useState<string>("")
    const [cost, setCost]=React.useState<number>(0)
    let expenseId=0;

    return (
        <form>
        <div className='row mt-3'>
            <div className='col-sm'>
                <label htmlFor="name">Name</label>
                <input onChange={(e)=>{setName(e.target.value)}} value={name} type="text" required id="name" className='form-control' />
            </div>
            <div className='col-sm'>
                <label htmlFor="cost">Cost</label>
                <input onChange={(e)=>{setCost(Number(e.target.value))}} value={cost} type="text" required id="cost" className='form-control' />
             </div>
            <div className='col-sm'>
                <br />
                <button onClick={(e)=>{e.preventDefault(); dispatch(addExpense({id:expenseId++, name:name, cost:cost}))}} type='submit' className='btn btn-primary'>Save</button>
            </div>
        </div>
        </form>
    )
}
export default Index
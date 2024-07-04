import { useAppSelector } from '@/redux/store';
import 'bootstrap/dist/css/bootstrap.css';
import { useAppDispatch } from '@/redux/store';
import { editBudget } from '@/redux/feature/Budget/BudgetSlice';
import React from 'react'

const Index=()=>{
   const dispatch = useAppDispatch()
   const budget = useAppSelector(state=>state.Budget.budget);
   const [money, setMoney]=React.useState<number>(0)
   
    return(
        <div className='row g-2'>
        <div className='alert alert-secondary'>
            <span>Budget: {budget}</span> 
           
        </div>
        <input style={{outline:'none'}} placeholder='Update your budget'  onChange={(e)=>{setMoney(Number(e.target.value))}}  type="text" required  className='form-control' />
        <button onClick={()=>{dispatch(editBudget(money))}} className='btn btn-primary'>Edit</button>
       
              
            </div>
         
       
        
    )
}

export default Index
import 'bootstrap/dist/css/bootstrap.css';
import { useAppSelector } from '@/redux/store';

const Index=()=>{
    const budget= useAppSelector(state=>state.Budget.budget)
    const expenses=useAppSelector(state=>state.Budget.expenses)
    
    const total=expenses.reduce((acc, cur) => {
        return acc + Number(cur.cost)
    }, 0)
    
    return(
        <div className='alert alert-success'>
            <span>Remaining: {budget-total}</span>
        </div>
    )
}

export default Index
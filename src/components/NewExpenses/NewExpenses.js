import {useState} from 'react'
import ExpenseForm from './ExpenseForm';
import './NewExpenses.css';
const NewExpenses= (props)=>{

    let [showExpesneForm,setShowExpenseForm]=useState(false);
    const showFormHandler = ()=>{
        setShowExpenseForm(true)
    }
    const cancelFormHandler = ()=>{
        setShowExpenseForm(false)
    }
   
    const SaveExpenseDataHandler = (expenseData)=>{
        const ExpenseData = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(ExpenseData)
    }

    let expenseContent = <button onClick={showFormHandler}>Add New Expenses</button>
                    
    if(showExpesneForm){
        expenseContent = <ExpenseForm cancelExenpseForm={cancelFormHandler} onSaveExpenseData={SaveExpenseDataHandler} />
    }
    return (
        <div className='new-expense'>
                {expenseContent}
        </div>
        
    )
}
export default NewExpenses
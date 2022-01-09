import { useState } from 'react/cjs/react.development'
import './ExpenseForm.css'

const ExpenseForm = (props)=>{
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const onTitleChangeHandler = (event)=>{
        setEnteredTitle(event.target.value);
    }
    const onAmountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value);
    }
    const onDateChangeHandler = (event)=>{
        setEnteredDate(event.target.value);
    }
    const cancelHandlder = ()=>{
        props.cancelExenpseForm()
    }
    const submitHandler = (event) =>{
        event.preventDefault()
        const ExpenseObj = {
            title:enteredTitle,
            amount:+enteredAmount,
            date:new Date(enteredDate)
        }
        props.onSaveExpenseData(ExpenseObj);
        props.cancelExenpseForm()
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return(
    <form onSubmit={submitHandler}>
    <div className='new-expense__controls'>
        
        <div className='new-expense__control'>
        <label>Title</label>
        <input type='text' value={enteredTitle} onChange={onTitleChangeHandler} />
        </div>
        <div className='new-expense__control'>
        <label>Amount</label>
        <input type='number' value={enteredAmount} onChange={onAmountChangeHandler} min="0.01" step="0.01"/>
        </div>
        <div className='new-expense__control'>
        <label>Date</label>
        <input type='Date' value={enteredDate} onChange={onDateChangeHandler} min="2019-01-01" max="2022-12-31" />
        </div>
    </div>
    <div className='new-expense__actions'>
            <button type="button" onClick={cancelHandlder}>Cancel</button>
            <button type="submit">Add Expense</button>
    </div>
</form>);
}
export default ExpenseForm
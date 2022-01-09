import React ,{useState}from 'react';
import ExpensesList from './ExpensesList'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpenseChart  from './ExpenseChart'
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')
  const selectYearHandler = (year) =>{
    setFilteredYear(year);
   
  }
  console.log(filteredYear);
  const filteredExpenses = props.items.filter(expense=>
    {if(expense.date.getFullYear().toString() === filteredYear){return true}
  });

 
  return (<li>
    <Card className="expenses">
    <ExpenseFilter selected={filteredYear} onSelectYear = {selectYearHandler}/>
    <ExpenseChart expensesData={filteredExpenses}/>
    <ExpensesList items={filteredExpenses} />
    </Card>
    </li>
  );
}

export default Expenses;

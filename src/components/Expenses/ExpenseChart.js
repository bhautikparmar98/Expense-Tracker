import Chart from '../Charts/Charts'
import Expenses from './Expenses';
const ExpenseChart = (props)=>{

    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ];
    for(let expenses of  props.expensesData){
        console.log(expenses)
        const expenseMonth = expenses.date.getMonth();
        chartDataPoints[expenseMonth].value += expenses.amount
    }
    const ExpensesArray = chartDataPoints.map(dataPoint => dataPoint.value)
    const maxExpense = Math.max(...ExpensesArray)


    return <Chart maxExpense={maxExpense} dataPoints={chartDataPoints}/>
}

export default ExpenseChart;
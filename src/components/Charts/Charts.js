import './Charts.css';
import ChartBar  from './ChartBar'

const Charts = (props)=>{
    return <div className='chart'>
        {props.dataPoints.map( dataPoint =><ChartBar 
        key ={dataPoint.label}
        label={dataPoint.label}
        value = {dataPoint.value}
        maxvalue = {props.maxExpense}
        />)}
    </div>
}
export default Charts
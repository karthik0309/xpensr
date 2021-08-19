import React from 'react'
import Card from '../card/Card'
import {selectExpenseList} from '../../actions/expensrSlice'
import {useSelector} from 'react-redux'
import classes from './ExpenseList.module.css'

const ExpenseList = ({img,mssg}) => {
    
    const list = useSelector(selectExpenseList)
    return (
        <div className={classes.expense__container}>
           {list.length<1 && 
            <div className={classes.modal__container}>
                <p>{mssg}</p>
                <img src={img} alt={mssg}/>
            </div>}
            {list.map((ele,index)=>(
                <Card title={ele.title}
                createdAt={ele.createdAt}
                amount={ele.amount}
                logo={ele.category}
                key={index}/>
            ))}
        </div>
    )
}

export default ExpenseList

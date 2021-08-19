import React,{useState,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {deleteExpense} from '../../actions/expensrSlice'
import logos from '../../constants/helper'
import classes from './Card.module.css'

const Card = ({title,logo,createdAt,amount}) => {
    const [currItem,setCurrItem] = useState({
        title:'',
        logo:'',
        color:''
    })
    
    const dispatch = useDispatch()

    useEffect(()=>{
        logos.map((ele)=>{
            if(ele.title===logo){
                setCurrItem(ele)
            }
            return -1
        })
    },[logo])

    const handleDelete=()=>{
        dispatch(deleteExpense({createdAt:createdAt}))
    }

    return (
        <div className={classes.card__container}       
        style={{ borderRight: `6px solid ${currItem.color}` }}
        >
            <img src={currItem.logo} alt="" className={classes.left}/>
            <h3 className={classes.title}>{title}</h3>
            <div className={classes.right}>
                <p>Amount: {amount}</p>
                <p>{new Date(createdAt).toDateString()}</p>
            </div>
            <i className="fas fa-trash" onClick={handleDelete}></i>
        </div>
    )
}

export default Card

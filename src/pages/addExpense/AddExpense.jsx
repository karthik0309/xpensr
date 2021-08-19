import React ,{useState} from 'react'
import ModalCard from '../../components/modalCard/ModalCard'
import { Link } from 'react-router-dom'
import { addExpense } from '../../actions/expensrSlice'
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import classes from './AddExpense.module.css'
import Added from '../../assets/added-image.png'
import 'react-toastify/dist/ReactToastify.css';

const categories = ["Entertainment","Food","Education","Shopping","Health"]

const AddExpense = () => {

    const [expenseDetails,setExpenseDetails]=useState({
        title:'',
        amount:'',
        category:categories[0],
    })

    const [added,setAdded] = useState(false)

    const  {title,amount,category} = expenseDetails
    const dispatch = useDispatch()

    const handleExpenseDetails=(name,event)=>{
        const updatedState = {...expenseDetails}
        updatedState[name] = event.target.value
        setExpenseDetails(updatedState)
    }

    const handleAddExpense=()=>{
        if(title==="" || amount===""){
            const notify=()=> toast("Fill all details")
            notify()
            return;
        }
        dispatch(addExpense({
            title:title,
            amount:amount,
            category:category,
            createdAt:Date.now()
        }))
        setAdded(true)
    }

    return (
        <div className={classes.expense__container}>
            {added && <ModalCard img={Added} mssg="Added to list" to="Home" route="/"/>}
            <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            />
            <h1>Add expenses</h1>
            <div className={classes.input__container}>
                <i className="fab fa-battle-net"></i>
                <input type="text" 
                className={classes.expense__input} 
                placeholder="Add Title"
                onChange={e=>handleExpenseDetails("title",e)}
                value={title}/>
            </div>
            <div className={classes.input__container}>
                <i className="fas fa-rupee-sign"></i>
                <input type="text" 
                className={classes.expense__input} 
                placeholder="Add Amount"
                onChange={e=>handleExpenseDetails("amount",e)}
                value={amount}/>
            </div>
            <select className={classes.category} 
            onChange={e=>handleExpenseDetails("category",e)}
            value={category}>
                {categories.map((ele,index)=>(
                    <option key={index} value={ele}>
                        {ele}
                    </option>
                ))}
            </select>
            <button className={classes.expense__send} 
            onClick={handleAddExpense}
            id="cancel" 
            name="add-button">
                <i className="fas fa-paper-plane"></i>
                Add
            </button>
            <Link to="/">
                <button className={classes.expense__cancel} id="cancel" name="redirect-button">
                    <i className="fas fa-times-circle"></i>
                    Cancel
                </button>
            </Link>
        </div>
    )
}

export default AddExpense

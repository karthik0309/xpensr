import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import classes from './SearchBar.module.css'

const SearchBar = () => {

    const [searchExpense,setSearchExpense] = useState('')

    const handleSearchExpense=(event)=>{
        setSearchExpense(event.target.value)
    }

    return (
        <div className={classes.search__bar}>
            <div className={classes.input}>
                <i className="fas fa-search"></i>
                <input type="text" 
                className={classes.search__input} 
                placeholder="search expenses"
                onChange={e=>handleSearchExpense(e)}
                value={searchExpense}/>
            </div>
            <Link to="/add-expense">
                <button className={classes.submit__button} id="add" name="redirect-button">
                    Add
                </button>
            </Link>
        </div>
    )
}

export default SearchBar

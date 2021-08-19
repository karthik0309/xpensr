import React from 'react'
import ExpenseList from '../../components/expenseList/ExpenseList'
import SearchBar from '../../components/searchBar/SearchBar'
import Empty from '../../assets/empty.png'
import classes from '../home/Home.module.css'

const Home = () => {
    return (
        <div className={classes.home__container}>
            <SearchBar/>            
            <ExpenseList img={Empty} mssg="Empty! No lists"/>
        </div>
    )
}

export default Home

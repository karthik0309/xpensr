import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    expenseList:[]
}

const expensrSlice = createSlice({
    name: 'expenserSlice',
    initialState,
    reducers: {
        addExpense:(state,action)=>{
            state.expenseList=[...state.expenseList,action.payload]
        },
        deleteExpense:(state,action)=>{
            let updatedList = [...state.expenseList]
            updatedList.map((ele,index)=>{
                if(ele.createdAt===action.payload.createdAt){
                    updatedList.splice(index,1)
                }
                return -1
            })
            state.expenseList=updatedList
        }
    }
});

export const {
    addExpense,
    deleteExpense
} = expensrSlice.actions

export const selectExpenseList = state => state.expenserSlice.expenseList
export default expensrSlice.reducer
import { configureStore,applyMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from '../actions/authSlice'
import expenseReducer from '../actions/expensrSlice'

export const store = configureStore({
  reducer: {
    authSlice:authReducer,
    expenserSlice:expenseReducer
  },
}, composeWithDevTools(
  applyMiddleware(),
));

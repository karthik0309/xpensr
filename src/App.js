import React, { lazy } from 'react'
import { Suspense } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/header/Header'
import Auth from './pages/auth/Auth'
const Home = lazy(()=>import('./pages/home/Home'))
const AddExpense = lazy(()=>import('./pages/addExpense/AddExpense'))

const App = () => {
  return (
    <>
      {/* <Auth/> */}
      <Header/>
      <Router>
        <Suspense fallback={<h1>Loading..</h1>}>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route  path="/add-expense" component={AddExpense}/>
        </Switch>
        </Suspense>
      </Router>
    </>
  )
}

export default App


//#f8f4f1
//#f7d790
//#e6b459
//#fd760d
//#f0bf60
//#4275df
//#bdb6df
//#d95f53
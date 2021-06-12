import React from 'react';
import AddExpensePage from '../components/AddExpensePage';
import EditExpense from '../components/EditExpensePage';
import ExpenseDashboard from '../components/ExpenseDashboard';
import NotFound from '../components/NotFound';
import { createBrowserHistory } from 'history';
import { Router ,Route , Switch,} from 'react-router-dom';
import  LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


export let history = createBrowserHistory();

const AppRouter = () => {
    return (   
    <Router  history = { history }>
     <div>
        <Switch>
            <PublicRoute path="/" component={LoginPage} exact = {true} />
            <PrivateRoute path="/dashboard" component={ExpenseDashboard} exact = {true} />
            <PrivateRoute path ="/create" component = {AddExpensePage} />
            <PrivateRoute path = "/edit/:id" component = {EditExpense} />
            <Route component = {NotFound} />
        </Switch>
     </div>
   </Router>)
}


export default AppRouter;
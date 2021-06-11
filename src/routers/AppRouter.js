import React from 'react';
import AddExpensePage from '../components/AddExpensePage';
import EditExpense from '../components/EditExpensePage';
import ExpenseDashboard from '../components/ExpenseDashboard';
import Help from '../components/Help';
import Header from '../components/Header';
import NotFound from '../components/NotFound';
import { createBrowserHistory } from 'history';
import { Router ,Route , Switch,} from 'react-router-dom';
import  LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';

export let history = createBrowserHistory();

const AppRouter = () => {
    return (   
    <Router  history = { history }>
     <div>
        <Header />
        <Switch>
            <Route path="/" component={LoginPage} exact = {true} />
            <PrivateRoute path="/dashboard" component={ExpenseDashboard} />
            <PrivateRoute path ="/create" component = {AddExpensePage} />
            <PrivateRoute path = "/edit/:id" component = {EditExpense} />
            <Route path = "/help" component = {Help} />
            <Route component = {NotFound} />
        </Switch>
     </div>
   </Router>)
}


export default AppRouter;
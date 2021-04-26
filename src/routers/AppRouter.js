import React from 'react';
import AddExpensePage from '../components/AddExpensePage';
import EditExpense from '../components/EditExpensePage';
import ExpenseDashboard from '../components/ExpenseDashboard';
import Help from '../components/Help';
import Header from '../components/Header';
import NotFound from '../components/NotFound';
import { BrowserRouter as Router,Route , Switch,} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import  LoginPage from '../components/LoginPage';

export const history = createBrowserHistory();

const AppRouter = () => {
    return (   
    <Router history={ history }>
     <div>
        <Header />
        <Switch>
            <Route path="/" component={LoginPage} exact = {true} />
            <Route path="/dashboard" component={ExpenseDashboard} />
            <Route path ="/create" component = {AddExpensePage} />
            <Route path = "/edit/:id" component = {EditExpense} />
            <Route path = "/help" component = {Help} />
            <Route component = {NotFound} />
        </Switch>
     </div>
   </Router>)
}


export default AppRouter;
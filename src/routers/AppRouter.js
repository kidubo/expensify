import React from 'react';
import AddExpensePage from '../components/AddExpensePage';
import EditExpense from '../components/EditExpensePage';
import ExpenseDashboard from '../components/ExpenseDashboard';
import Help from '../components/Help';
import Header from '../components/Header';
import NotFound from '../components/NotFound';
import { BrowserRouter, Route , Switch,} from 'react-router-dom';

const AppRouter = () => {
    return (   
    <BrowserRouter>
     <div>
        <Header />
        <Switch>
            <Route path="/" component={ExpenseDashboard} exact = {true} />
            <Route path ="/create" component = {AddExpensePage} />
            <Route path = "/edit/:id" component = {EditExpense} />
            <Route path = "/help" component = {Help} />
            <Route component = {NotFound} />
        </Switch>
     </div>
   </BrowserRouter>)
}


export default AppRouter;
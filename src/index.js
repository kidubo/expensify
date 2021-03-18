import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './stores/configureStore';
import  { addExpense } from './actions/expense';
import getVisibleExpenses from './selectors/expenses';
import reportWebVitals from './reportWebVitals';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount : 4500 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount : 109500 }));

// store.dispatch(setTextFilter('bill'));
//  This was usefull when we havent set text fillter for ourself now it just hold us back
// setTimeout(()=> {
//     store.dispatch(setTextFilter('water'));
// },3000)

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters); 
console.log(visibleExpenses);
console.log(store.getState());

const jsx = (
    <Provider store = {store} >
      <AppRouter />
    </Provider>
)

ReactDOM.render( jsx, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

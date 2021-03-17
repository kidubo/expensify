import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './stores/configureStore';
import  { addExpense } from './actions/expense';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import reportWebVitals from './reportWebVitals';

const store = configureStore();

store.dispatch(addExpense({ description: 'water bill'}));
store.dispatch(addExpense({ description: 'gas bill'}));
store.dispatch(setTextFilter('gas'));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters); 
console.log(visibleExpenses);
// console.log(store.getState());

ReactDOM.render( < AppRouter />, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './stores/configureStore';
import  { addExpense } from './actions/expense';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import reportWebVitals from './reportWebVitals';

const store = configureStore();

store.dispatch(addExpense({ description: 'water bill'}));
store.dispatch(addExpense({ description: 'gas bill'}));
store.dispatch(setTextFilter('bill'));

setTimeout(()=> {
    store.dispatch(setTextFilter('rent'));
},3000)

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

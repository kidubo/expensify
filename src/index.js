import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import { startSetExpenses } from './actions/expense';
import { login , logout } from './actions/auth';
import configureStore from './stores/configureStore';
import getVisibleExpenses from './selectors/expenses';
import reportWebVitals from './reportWebVitals';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';


const store = configureStore();

// store.dispatch(addExpense({ description: 'Water bill', amount : 4500 }));
// store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
// store.dispatch(addExpense({ description: 'Rent', amount : 109500 }));

// store.dispatch(setTextFilter('bill'));
//  This was usefull when we havent set text fillter for ourself now it just hold us back
// setTimeout(()=> {
//     store.dispatch(setTextFilter('water'));
// },3000)

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters); 
// console.log(visibleExpenses);
// console.log(store.getState());

console.log('test')
const jsx = (
    <Provider store = {store} >
      <AppRouter />
    </Provider>
)

let hasRendered = false;
const renderApp = () => {
  if(!hasRendered){
    ReactDOM.render( jsx, document.getElementById('root'));
    hasRendered = true;

  }
}


ReactDOM.render(<LoadingPage />, document.getElementById('root'));

 store.dispatch(startSetExpenses()).then(()=>{
   ReactDOM.render( jsx, document.getElementById('root'));
 })




firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      console.log('uid', user.uid)
      store.dispatch(login(user.uid))
      store.dispatch(startSetExpenses()).then(()=>{
        renderApp();
        if(history.location.pathname === "/"){
          history.push("/dashboard")      
        }
    })

    }else {
      store.dispatch(logout())
      renderApp();
      history.push("/")
    }
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

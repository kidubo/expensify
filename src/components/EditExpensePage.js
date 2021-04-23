import React from 'react';
import{connect} from 'react-redux';
import ExpenseForm from './ExpenseForm'
import { startEdidExpense , startRemoveExpense } from '../actions/expense'

const EditExpensePage = (props) => {
    return (
    <div>
      <ExpenseForm 
          expense={props.expense}
          onSubmit={(expense)=>{
            props.dispatch(startEdidExpense(props.expense.id, expense))
            props.history.push('/')
            
            // console.log('updated', expense)
          }}
      />   
      <button onClick={()=>{
              props.dispatch(startRemoveExpense({id: props.expense.id}));
              props.history.push('/');
            }}>Remove</button>
      </div>
)};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense)=>{
      return expense.id === props.match.params.id
    })
  }
}

export default connect(mapStateToProps)(EditExpensePage);
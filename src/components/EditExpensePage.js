import React from 'react';
import{connect} from 'react-redux';
import ExpenseForm from './ExpenseForm'
import { editExpense} from '../actions/expense'

const EditExpensePage = (props) => {
    return (
    <div>
      <ExpenseForm 
          expense={props.expense}
          onSubmit={(expense)=>{
            props.dispatch(editExpense(props.expense.id, expense))
            props.history.push('/')
            
            console.log('updated', expense)
          }}
      />    
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
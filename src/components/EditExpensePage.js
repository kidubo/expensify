import React from 'react';
import{connect} from 'react-redux';
import ExpenseForm from './ExpenseForm'
import { startEdidExpense , startRemoveExpense } from '../actions/expense'

const EditExpensePage = (props) => {
    return (
    <div>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title"> Edit Expense </h1>
            </div>
        </div>
      <div className="content-container">
      <ExpenseForm 
          expense={props.expense}
          onSubmit={(expense)=>{
            props.dispatch(startEdidExpense(props.expense.id, expense))
            props.history.push('/')
            
            // console.log('updated', expense)
          }}
      />
      </div> 
        <div className="content-container">
            <button className="button button--remove"
            onClick={()=>{
                    props.dispatch(startRemoveExpense({id: props.expense.id}));
                    props.history.push('/dashboard');
                  }}>
                  Remove Expense
          </button>
        </div>
      </div>
)};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense)=>{
      return expense.id === props.match.params.id
    })
  }
}

// const mapDispatchToProps = ( dispatch, props) => ({
//     startEdidExpense: (id, updates)=>{dispatch(startEdidExpense(id, updates))},
//     startRemoveExpense: (data) => {dispatch(startRemoveExpense(data))}
// })

export default connect(mapStateToProps)(EditExpensePage);
import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseFrom';
import { addExpense } from '../actions/expense';

const AddExpensePage = (props) => {
    return (
        <div>
            <h1>
             Add Expense
            </h1>
            <ExpenseForm 
                onSubmit={(expense)=>{
                    props.dispatch(addExpense(expense))
                    props.history.push("/")
                }}
            />
        </div>
    );
}

export default connect()(AddExpensePage);
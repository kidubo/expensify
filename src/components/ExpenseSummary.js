import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getVisibleExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal/100).format('$0,0.00')
    
    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal} </h1>  
        </div>
    );
};

const mapStateToProps = (state)=>{
    const visibleExpense = getVisibleExpenses(state.expenses, state.filters)

    return {
        expenseCount: visibleExpense.length,
        expensesTotal:selectExpensesTotal(visibleExpense)
    }
}

export default connect (mapStateToProps) (ExpensesSummary);
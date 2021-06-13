import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import ExpenseListItem from './ExpenseListItem'
import getVisibleExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
        <div className="content-container">
           <div className="list-header">
                <div className="show-for-mobile">Expenses</div>
                <div className="show-for-desktop">Expense</div>
                <div className="show-for-desktop">Amount</div>
           </div>
          <div className="list-body">
                {
                    props.expenses.length === 0 ? (
                        <div className="list-item list-item--message">
                        <span> No expenses </span>
                        </div>
                    ) : (
                        
                        props.expenses.map((expense)=>{
                            return <ExpenseListItem key = {expense.id} {...expense}/>
                        })
                    )
                }
          </div>
          <footer style={{marginTop: "8rem", textAlign: "center"}}>
                <p >craeted by <a style={{ textDecoration: "none" , color:"#666"}} href="https://www.linkedin.com/in/innocent-leonard-b42179131/">Innocent L Kidubo</a> </p>
          </footer>
        </div>
);

const mapStateToProps = (state) => {
    return {
        expenses:getVisibleExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList)
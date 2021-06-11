import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth'


const Header = ( { startLogout }) => {
    return (
        <div>
        <header>
            <h1>Expensify</h1>
            <div className = "nav">
                <NavLink to = "/dashboard" activeClassName="selected" exact = {true}>Dashboard</NavLink>
                <NavLink to = "/create" activeClassName="selected">Create Expense</NavLink>
                 <NavLink to = "/help" activeClassName="selected">Help</NavLink>
                 <button onClick= { startLogout }>Logout</button>
            </div>
        </header>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps) (Header);
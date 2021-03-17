import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div>
        <header>
            <h1>Expensify</h1>
            <div className = "nav">
                <NavLink to = "/" activeClassName = "is-active" exact = {true}>Dashboard</NavLink>
                <NavLink to = "/create" activeClassName = "is-active">Create Expense</NavLink>
                 <NavLink to = "/help" activeClassName = "is-active">Help</NavLink>
            </div>
        </header>
        </div>
    )
}

export default Header;
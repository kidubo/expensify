import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div>
        <header>
            <h1>Expensify</h1>
            <div className = "nav">
                <NavLink to = "/" activeClassName="selected" exact = {true}>Dashboard</NavLink>
                <NavLink to = "/create" activeClassName="selected">Create Expense</NavLink>
                 <NavLink to = "/help" activeClassName="selected">Help</NavLink>
            </div>
        </header>
        </div>
    )
}

export default Header;
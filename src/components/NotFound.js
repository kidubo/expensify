import React from 'react';
import {  Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <div>
         404 - <Link to = "/">Go home</Link>
        </div>
    );
}

export default NotFound;

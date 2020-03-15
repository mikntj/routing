/*import React from 'react';

import './App.css';

function Nav() {
  return (
    <div className="App">
      <h1>Nav</h1>
    </div>
  );
}

export default Nav;
*/

import React from 'react';
import { Link } from 'react-router-dom'
 const Nav = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Shopping</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>  
    )
}

export default Nav;
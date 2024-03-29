import React from 'react';
import { Link } from "react-router-dom";
import { InCart } from './InCart';



export const Nav = () => 
<>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <span className="navbar-brand"><Link className="nav-link" to="/">REDUX SHOP</Link></span>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
        <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/cart/">Cart</Link>   
        </li>
    </ul>
  </div>
  <InCart/>
  
</nav>
</>

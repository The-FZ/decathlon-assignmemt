import React from 'react';
import './index.css';

import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/appSlice';

function Navbar({ cart }) {

  const user = useSelector(selectUser);

  return (
    <header className='navbar'>
      <NavLink to='/' style={{ textDecoration: 'none' }}>
        <div className='navbar__title'>
          Decathlon Assignment
      </div>
      </NavLink>

      <div className='cart__and__user__container'>
        {
          user && <div className='navbar__user'>
            {user.email}
          </div>
        }
        <NavLink to='/cart' style={{ textDecoration: 'none' }}>
          <button className='navbar__cart__container'>
            <div className='cart'>cart</div>
            <div className='cart__items'>{cart.length}</div>
          </button></NavLink>
      </div>
    </header>
  )
}

export default Navbar;

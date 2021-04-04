import React from 'react'
import './index.css';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { selectCart, clearCart, updateQuantity } from '../../features/cartSlice';
import { selectUser, updateUserWithKart } from '../../features/appSlice.js';

import CartItem from '../CartItem';

function Cart() {

  const cart = useSelector(selectCart);
  const user = useSelector(selectUser);
  const history = useHistory();
  const dispatch = useDispatch()

  const checkout = () => {
    if (!user) {
      history.push('/login');
      return;
    }

    dispatch(updateUserWithKart(cart));
    dispatch(clearCart());
    history.push('/');
  }

  const totalMRP = () => {
    let mrp = cart.reduce((acc, item) => {
      acc += item.quantity * item.mrp
      return acc;
    }, 0);
    return mrp;
  }

  const totalPrice = () => {
    let price = cart.reduce((acc, item) => {
      acc += item.quantity * item.price
      return acc;
    }, 0);
    return price;
  }

  if (cart.length === 0) {
    return (
      <div className='cart__empty__container'>
        <div className='cart__empty'>
          Cart empty :(
        </div>
      </div>
    )
  }
  if (cart.length > 0) {
    return (
      <div className='cart__container'>
        <div className='cart__items__container'>
          <div className='cart__items__block'>
            <h3 className='block__heading'>My cart ({cart.length})</h3>
            {
              cart.map(item => {
                return (
                  <CartItem key={item.id} {...item} />
                )
              })
            }
          </div>
          <div className='price__details__block'>
            <h3 className='block__heading'>Price details</h3>

            <div className='price__details__actualMRP__container'>
              <div>MRP</div>
              <div>₹ {totalMRP()}</div>
            </div>

            <div className='price__details__actualprice__container'>
              <div>Price</div>
              <div>{totalPrice()}</div>
            </div>

            <div className='price__details__discount__container discount'>
              <div>Discount</div>
              <div> - {totalMRP() - totalPrice()}</div>
            </div>

            <div className='price__details__actualprice__container totalPrice'>
              <div> Total Price</div>
              <div>₹ {totalPrice()}</div>
            </div>

            <div className='checkout__container'>
              <button className='checkout' onClick={checkout}>
                Checkout
            </button>
            </div>

          </div>
        </div>

      </div>
    )
  }

}

export default Cart;

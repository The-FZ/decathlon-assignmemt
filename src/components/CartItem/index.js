import React, { useState } from 'react'
import './index.css';

import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, updateQuantity, decreaseQuantity, removeItem } from '../../features/cartSlice';

function CartItem({ id, category, name, imageURL, mrp, price, quantity }) {

  const [_quantity, setQuantity] = useState(quantity);

  const dispatch = useDispatch();

  const increase = () => {
    setQuantity(prevState => prevState + 1);
    dispatch(increaseQuantity(id));
  }

  // const updateQuantity = event => {
  //   if (event && event.target && event.target.value) {
  //     let value = event.target.value.slice(1);
  //     console.log(value);

  //     value = Number(value)
  //     setQuantity(value);
  //     if (value) {
  //       dispatch(updateQuantity(id, value));
  //     }
  //   }
  // }

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(prevState => prevState - 1);
      dispatch(decreaseQuantity(id));
    }
  }

  const remove = () => {
    dispatch(removeItem(id));
  }

  return (
    <div className='main__item__container'>
      <div className='cart__item'>
        <div className='item__image'>
          <img src={imageURL} />
        </div>

        <div className='item__details'>
          <div className='name__container'>
            {name}
          </div>

          <div className='category__container'>
            {category}
          </div>

          <div className='original__price__container'>
            <div className='price'>
              ₹{price}
            </div>
            <div className='mrp'>
              ₹{mrp}
            </div>
          </div>
        </div>
      </div>

      <div className='quantity__container'>
        <div className='input__buttons'>
          <button className='decrease__button' onClick={decrease}> - </button>
          <div>
            <input type='number' className='item__quantity__input' value={_quantity} min={1} readOnly />
            {/* {updateQuantity} */}
          </div>
          <button className='increase__button' onClick={increase}> + </button>
        </div>

        <button className='remove__button' onClick={remove}>
          Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem;

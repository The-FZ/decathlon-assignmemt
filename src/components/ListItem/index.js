import React from 'react'
import './index.css';
import { addToCart, selectCart } from '../../features/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

function ListItem({ id, category, name, imageURL, mrp, price }) {

  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const add = () => {
    dispatch(addToCart({ id, category, name, imageURL, mrp, price }));
  }

  return (
    <div className='list__gallery'>
      <img src={imageURL} />
      <div className='name__container'>
        {name}
      </div>

      <div className='category__container'>
        {category}
      </div>

      <div className='data__container'>
        <div className='price__container'>
          <div className='price'>
            ₹{price}
          </div>
          <div className='mrp'>
            ₹{mrp}
          </div>
        </div>

        <button className='add__to__cart' onClick={add}>
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default ListItem;

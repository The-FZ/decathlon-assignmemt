import React, { useState } from 'react'
import './index.css';
import ListItem from '../ListItem';

function Homepage() {

  let data = [

    {
      id: 1,
      name: 'Jacket',
      category: 'clothes',
      imageURL: 'https://contents.mediadecathlon.com/p424563/65eaabd17d874331ce1d119bc109c464/p424563.jpg?f=650x650&format=auto',
      mrp: 1000,
      price: 700
    },

    {
      id: 2,
      name: 'Lower',
      category: 'clothes',
      imageURL: 'https://contents.mediadecathlon.com/p1725008/7f36830f23a7fa961ade6e6038c9fda5/p1725008.jpg?f=650x650&format=auto',
      mrp: 1500,
      price: 800
    },

    {
      id: 3,
      name: 'Dumbell',
      category: 'gym',
      imageURL: 'https://contents.mediadecathlon.com/p1562273/c0877a00a0b72ac588a79b679a1b812a/p1562273.jpg?f=650x650&format=auto',
      mrp: 11999,
      price: 8999
    },

    {
      id: 4,
      name: 'Rope',
      category: 'gym',
      imageURL: 'https://contents.mediadecathlon.com/p1709851/04c01420b81518df6a0d0b0dcadc9a3f/p1709851.jpg?f=650x650&format=auto',
      mrp: 599,
      price: 359
    },

    {
      id: 5,
      name: 'Bag',
      category: 'gym',
      imageURL: 'https://contents.mediadecathlon.com/p1800992/f6570730f6ff3ea4b05081347ded180c/p1800992.jpg?f=650x650&format=auto',
      mrp: 5999,
      price: 2999
    },

    {
      id: 6,
      name: 'Trouser',
      category: 'clothes',
      imageURL: 'https://contents.mediadecathlon.com/p1786958/2b0a8a97ea3b1154f2f3734009451fe2/p1786958.jpg?f=650x650&format=auto',
      mrp: 2999,
      price: 1500
    },

    {
      id: 7,
      name: 'Women-Trouser',
      category: 'women',
      imageURL: 'https://contents.mediadecathlon.com/p1859933/95d468002698dedc243b4b04ae6884d5/p1859933.jpg?f=650x650&format=auto',
      mrp: 2500,
      price: 1200
    },

    {
      id: 8,
      name: 'Women-legging',
      category: 'women',
      imageURL: 'https://contents.mediadecathlon.com/p1893401/ce4aab3fc4f0fc57c471bec71f03e09c/p1893401.jpg?f=650x650&format=auto',
      mrp: 1999,
      price: 999
    },

    {
      id: 9,
      name: 'Table Tennis',
      category: 'indoor',
      imageURL: 'https://contents.mediadecathlon.com/p1914050/d48cba1835ba96a4bc36ed2a4c15d33d/p1914050.jpg?f=650x650&format=auto',
      mrp: 1200,
      price: 1100
    },

    {
      id: 10,
      name: 'Carrom',
      category: 'indoor',
      imageURL: 'https://contents.mediadecathlon.com/p1269807/98218e7ecf686459762d0a3c8ad94997/p1269807.jpg?f=650x650&format=auto',
      mrp: 2999,
      price: 1999
    },

    {
      id: 11,
      name: 'Jacket',
      category: 'clothes',
      imageURL: 'https://contents.mediadecathlon.com/p424563/65eaabd17d874331ce1d119bc109c464/p424563.jpg?f=650x650&format=auto',
      mrp: 1000,
      price: 700
    },

    {
      id: 12,
      name: 'Lower',
      category: 'clothes',
      imageURL: 'https://contents.mediadecathlon.com/p1725008/7f36830f23a7fa961ade6e6038c9fda5/p1725008.jpg?f=650x650&format=auto',
      mrp: 1500,
      price: 800
    },

    {
      id:13,
      name: 'Dumbell',
      category: 'gym',
      imageURL: 'https://contents.mediadecathlon.com/p1562273/c0877a00a0b72ac588a79b679a1b812a/p1562273.jpg?f=650x650&format=auto',
      mrp: 11999,
      price: 8999
    },

    {
      id: 14,
      name: 'Rope',
      category: 'gym',
      imageURL: 'https://contents.mediadecathlon.com/p1709851/04c01420b81518df6a0d0b0dcadc9a3f/p1709851.jpg?f=650x650&format=auto',
      mrp: 599,
      price: 359
    },

    {
      id: 15,
      name: 'Bag',
      category: 'gym',
      imageURL: 'https://contents.mediadecathlon.com/p1800992/f6570730f6ff3ea4b05081347ded180c/p1800992.jpg?f=650x650&format=auto',
      mrp: 5999,
      price: 2999
    },

    {
      id: 16,
      name: 'Trouser',
      category: 'clothes',
      imageURL: 'https://contents.mediadecathlon.com/p1786958/2b0a8a97ea3b1154f2f3734009451fe2/p1786958.jpg?f=650x650&format=auto',
      mrp: 2999,
      price: 1500
    },

    {
      id: 17,
      name: 'Women-Trouser',
      category: 'women',
      imageURL: 'https://contents.mediadecathlon.com/p1859933/95d468002698dedc243b4b04ae6884d5/p1859933.jpg?f=650x650&format=auto',
      mrp: 2500,
      price: 1200
    },

    {
      id: 18,
      name: 'Women-legging',
      category: 'women',
      imageURL: 'https://contents.mediadecathlon.com/p1893401/ce4aab3fc4f0fc57c471bec71f03e09c/p1893401.jpg?f=650x650&format=auto',
      mrp: 1999,
      price: 999
    },

    {
      id: 19,
      name: 'Table Tennis',
      category: 'indoor',
      imageURL: 'https://contents.mediadecathlon.com/p1914050/d48cba1835ba96a4bc36ed2a4c15d33d/p1914050.jpg?f=650x650&format=auto',
      mrp: 1200,
      price: 1100
    },

    {
      id: 20,
      name: 'Carrom',
      category: 'indoor',
      imageURL: 'https://contents.mediadecathlon.com/p1269807/98218e7ecf686459762d0a3c8ad94997/p1269807.jpg?f=650x650&format=auto',
      mrp: 2999,
      price: 1999
    },



  ]
  return (
    <div className='main__container'>
      {
        data.map(item => {
          return (
            <ListItem key={item.id} {...item} />
          )
        })
      }
    </div>
  )
}

export default Homepage;

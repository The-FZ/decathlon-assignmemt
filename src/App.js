import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Homepage from './components/Homepage/';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

import { useSelector } from 'react-redux'
import { selectUser } from './features/appSlice';
import { selectCart } from './features/cartSlice';

function App() {

  // let user = useSelector(selectUser);
  let cart = useSelector(selectCart);

  return (
    <div className="App">
      <Router>
        {/* {!user ? <Login /> : */}
        <Navbar cart={cart} />
        <>
          <Switch>
            <Route exact path='/'>
              <Homepage />
            </Route>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route exact path='/cart'>
              <Cart />
            </Route>
            <Redirect to='/' />
          </Switch></>
        {/* } */}
      </Router>

    </div>
  );
}

export default App;

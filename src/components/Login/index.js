import React, { useState } from 'react'
import './index.css';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { selectUser, login } from '../../features/appSlice'

let userDatabase = [
  {
    userName: 'zufu@gmail.com',
    password: '123abc123'
  },

  {
    userName: 'pingu@gmail.com',
    password: 'qwerty123'
  },

  {
    userName: 'sophie@gmail.com',
    password: 'sophie123'
  },

  {
    userName: 'admin@gmail.com',
    password: 'password123'
  }
]

function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();


  const dispatch = useDispatch();
  const history = useHistory();
  let user = useSelector(selectUser);
  console.log({ user });


  const getEmail = event => {
    setEmail(event.target.value);
  }

  const getPassword = event => {
    setPassword(event.target.value);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let index = userDatabase.findIndex(item => item.userName === email);
    if (index === -1) {
      setError('User credentials not found');
      return;
    }

    if (userDatabase[index].password !== password) {
      setError('Wrong user credentials');
      return;
    }

    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
    history.push('/');

  }

  return (
    <div className='container'>
      <form className='login__form__container' onSubmit={onSubmitHandler}>
        <h2 className='login__heading'>Please login to use the application</h2>
        <div className='inputfield__container'>
          <input type='text' name='email' className='input__styling' required onChange={getEmail} value={email} />
          <span className='label__styling'>Email</span>
        </div>

        <div className='inputfield__container'>
          <input type='password' name='password' className='input__styling' required onChange={getPassword} value={password} />
          <span className='label__styling'>Password</span>
        </div>

        <button className='button__styling'>
          Login
        </button>
        {
          error && <div className='error__container'>
            {error}
          </div>
        }
      </form>
    </div>
  )
}

export default Login;

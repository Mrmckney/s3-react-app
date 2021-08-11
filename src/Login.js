import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function Login() {

  let history = useHistory()

  const [user, setUser] = useState({})

  const handleUserForm = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleUserLogin = () => {
    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(rawData => rawData.json())
      .then(data => localStorage.setItem('user', JSON.stringify(data)))
      .then(sendUser => history.push('/loggedin'))
      .catch(err => console.log(err))
  }

  return (
    <>
      <h2>Sign in form</h2>
      <input 
        type='email' 
        name='email' 
        placeholder="Your email here"
        onChange={handleUserForm} 
      />
      <input 
        type='password' 
        name='password' 
        placeholder="Your password here"
        onChange={handleUserForm} 
      />
      <button 
        type='submit' 
        onClick={handleUserLogin} 
        disabled={user.email && user.password ? false : true}
      >
        Sign Me in!
      </button>
    </>
  )
}
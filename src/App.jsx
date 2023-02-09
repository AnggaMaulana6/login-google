import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { async } from '@firebase/util';
import auth from './config';

function App() {
 const Navigate = useNavigate();
 async function Login() {
  const data = await signInWithPopup(auth, new GoogleAuthProvider())
  Navigate(`/home/${data.user.email}`)
 }

  return (
    <div className="App">
      <button onClick={Login}>Login</button>
    </div>
  )
}

export default App

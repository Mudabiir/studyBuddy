import { useState } from 'react'
import './App.css'

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Link, Outlet } from 'react-router-dom';


function App() {
  

  return (
    <>
    
    <SignedOut>
      <SignInButton onClick={
        <Link to='/home'/>
      }/>
    </SignedOut>
     
    <Outlet />
    </>
  )
}

export default App

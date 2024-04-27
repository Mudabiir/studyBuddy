import { useAuth } from '@clerk/clerk-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { UserButton   } from '@clerk/clerk-react'

function Header() {
    
    const {userId}=useAuth();
    {console.log(userId)}
    if(!userId) return;
  return (
    <>
    
    <Link to='/discuss'>discussion  </Link>
    <Link to='/collab'>collab    </Link>
    <Link to='/resources'>resources  </Link>
    <Link to='/home'>Home    </Link>
    <Link to='/profile'>profile   </Link>
    <UserButton />
    </>
  )
}

export default Header
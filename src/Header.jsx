import { useAuth } from '@clerk/clerk-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { UserButton   } from '@clerk/clerk-react';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

function Header() {
    const pages=[
        Discussion,Collab,Resources,Home,Profile
    ];
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
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar({ currentUser }) {
    const link = {
        width: '100px',
        adding: '12px',
        margin: '0 6px 6px',
        background: 'blue',
        textDecoration: 'none',
        color: 'white',
    }
    return (
        <div className='navbar'>
            <NavLink to="/" exact style={link} activeStyle={{background: 'darkblue'}}>Welcome</NavLink>
            <NavLink to='/shoppies' exact style={link} activeStyle={{background: 'darkblue'}}>The Shoppies</NavLink>
            <NavLink to='/shopimg' exact style={link} activeStyle={{background: 'darkblue'}}>Shop IMG</NavLink>
            {currentUser ? <NavLink to='/userpage' exact style={link} activeStyle={{background: 'darkblue'}}>My Account</NavLink> 
            : 
            <NavLink to='/login' exact style={link} activeStyle={{background: 'darkblue'}}>Log In</NavLink>}
        </div>
    )
}

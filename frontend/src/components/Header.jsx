import React from 'react'
import { Link } from 'react-router-dom'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'

function Header() {
    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'>bottlesDb</Link>
            </div>
            <ul>
                <li>
                    <Link to='/login'>
                        <FaSignInAlt /> login
                    </Link>
                </li>
                <li>
                    <Link to='/register'>
                        <FaUser /> register
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header
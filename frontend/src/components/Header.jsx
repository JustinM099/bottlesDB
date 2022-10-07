import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'


function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'>bottlesDb</Link>
            </div>
            <ul>
                {user ? ( <li>
                    <button className='btn' onClick={onLogout}>
                        <FaSignOutAlt /> logout
                    </button>
                </li>) : (<>
                <li>
                    <Link to='/login'>
                        <FaSignInAlt /> login
                    </Link>
                </li>
                <li>
                    <Link to='/register'>
                        <FaUser /> register
                    </Link>
                </li></>)}
                
            </ul>
        </header>
    )
}

export default Header
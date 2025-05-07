import React from 'react'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout, reset } from '../../redux/slices/authSlice'
function Header() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)

    const onLogoutFn = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }
    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'> Task Creator </Link>
            </div>
            <ul>
                {user ?
                    <li> <button className='btn' onClick={onLogoutFn}>
                        <FaSignOutAlt /> Logout
                    </button> </li>
                    :
                    <>
                        <li>
                            <Link to='/login'>
                                <FaSignInAlt /> Login
                            </Link>
                        </li>
                        <li>
                            <Link to='/register'>
                                <FaUser /> Register
                            </Link>
                        </li>
                    </>
                }
            </ul>
        </header>


    )
}

export default Header

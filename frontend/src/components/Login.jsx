import React, { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from './commons/Spinner'
import { login, reset } from '../redux/slices/authSlice'
function Login() {

    const [formData, setFormData] = useState({ email: '', password: '' })
    const { email, password } = formData;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth)

    const onChange = (e) => {

        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    useEffect(() => {
        if (isError) toast.error(message)
        if (isSuccess || user) navigate('/')
        dispatch(reset())
    }, [user, isLoading, isError, isSuccess, message, dispatch])

    const onSubmit = (e) => {
        e.preventDefault();
        const userData = { email, password }
        dispatch(login(userData))
    }

    return (

        isLoading ? <Spinner /> : <>
            <section className='heading'>
                <h1><FaSignInAlt /> Login</h1>
                <p> Login and Start Creating tasks</p>
            </section>
            <section className='form'>
                <form onSubmit={onSubmit} >

                    <div className='form-group'>
                        <input type='email' className='form-control' id='email' name='email' value={email} placeholder='Enter Your Email' onChange={onChange} />
                    </div>
                    <div className='form-group'>
                        <input type='password' className='form-control' id='password' name='password' value={password} placeholder='Enter Password' onChange={onChange} />
                    </div>

                    <div className='form-group'>
                        <button type='submit' className='btn btn-block'> Submit </button>
                    </div>
                </form>
            </section>
        </>

    )
}

export default Login
